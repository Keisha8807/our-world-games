import Phaser from 'phaser';
import { behaviorCueFor } from '../game/behavior';
import {
  generateRound,
  matchingSuspects,
  SUSPECT_NAMES,
  type EvidenceRecord,
  type MysteryRound,
  type SuspectName,
} from '../game/deduction';

type Suspect = {
  name: SuspectName;
  x: number;
  y: number;
  color: number;
};

type ClueMarker = {
  circle: Phaser.GameObjects.Arc;
  label: Phaser.GameObjects.Text;
  evidence: EvidenceRecord;
  found: boolean;
};

export class PrototypeScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;
  private playerBody!: Phaser.Physics.Arcade.Body;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys!: Record<'W' | 'A' | 'S' | 'D' | 'E' | 'TAB', Phaser.Input.Keyboard.Key>;
  private accuseKeys: Phaser.Input.Keyboard.Key[] = [];
  private restartKey?: Phaser.Input.Keyboard.Key;

  private round!: MysteryRound;
  private clueMarkers: ClueMarker[] = [];
  private discoveredClues: EvidenceRecord[] = [];
  private wrongAccusations = new Set<SuspectName>();
  private resolvedRedHerringSecret = false;

  private suspectBodies = new Map<SuspectName, Phaser.GameObjects.Rectangle>();
  private behaviorTick = 0;
  private behaviorEvent?: Phaser.Time.TimerEvent;

  private caseBoard!: Phaser.GameObjects.Container;
  private caseBoardOpen = false;
  private caseEvidenceText!: Phaser.GameObjects.Text;
  private caseSuspectText!: Phaser.GameObjects.Text;
  private caseStatusText!: Phaser.GameObjects.Text;

  private clueText!: Phaser.GameObjects.Text;
  private scoreText!: Phaser.GameObjects.Text;
  private timerText!: Phaser.GameObjects.Text;
  private score = 0;
  private roundEndsAt = 0;
  private roundEnded = false;
  private revealPanel?: Phaser.GameObjects.Container;

  constructor() {
    super('prototype');
  }

  create(): void {
    this.round = generateRound();
    this.score = 0;
    this.discoveredClues = [];
    this.wrongAccusations.clear();
    this.resolvedRedHerringSecret = false;
    this.suspectBodies.clear();
    this.behaviorTick = 0;
    this.caseBoardOpen = false;
    this.roundEnded = false;

    this.physics.world.setBounds(0, 0, 960, 540);
    this.drawRecCenter();
    this.createHud();
    this.createPlayer();
    this.createSuspects();
    this.createClues();
    this.createCaseBoard();
    this.bindInput();
    this.createBehaviorDirector();

    this.roundEndsAt = this.time.now + 120_000;
    this.refreshHud();
    this.refreshCaseBoard();
  }

  update(): void {
    this.updateTimer();

    if (this.roundEnded || this.caseBoardOpen) {
      this.playerBody.setVelocity(0, 0);
      return;
    }

    const speed = 220;
    let x = 0;
    let y = 0;

    if (this.cursors.left.isDown || this.keys.A.isDown) x -= 1;
    if (this.cursors.right.isDown || this.keys.D.isDown) x += 1;
    if (this.cursors.up.isDown || this.keys.W.isDown) y -= 1;
    if (this.cursors.down.isDown || this.keys.S.isDown) y += 1;

    const direction = new Phaser.Math.Vector2(x, y);
    if (direction.lengthSq() > 0) direction.normalize().scale(speed);
    this.playerBody.setVelocity(direction.x, direction.y);

    const active = this.activeClueMarker();
    if (active) {
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, active.circle.x, active.circle.y);
      active.circle.setScale(distance < 58 ? 1.3 : 1);
    }
  }

  private drawRecCenter(): void {
    this.add.rectangle(480, 270, 940, 510, 0xf7f1e8).setStrokeStyle(4, 0x24324a);

    const zones = [
      { name: 'GYM', x: 170, y: 180, w: 300, h: 220, color: 0xdde8ff },
      { name: 'GAME ROOM', x: 480, y: 155, w: 280, h: 170, color: 0xe9ddff },
      { name: 'ART ROOM', x: 790, y: 175, w: 280, h: 210, color: 0xffe4ef },
      { name: 'SNACK AREA', x: 760, y: 410, w: 300, h: 170, color: 0xffefd7 },
      { name: 'TROPHY HALL', x: 350, y: 415, w: 470, h: 160, color: 0xe4f6e8 },
    ];

    for (const zone of zones) {
      this.add.rectangle(zone.x, zone.y, zone.w, zone.h, zone.color).setStrokeStyle(2, 0xb7beca);
      this.add
        .text(zone.x - zone.w / 2 + 12, zone.y - zone.h / 2 + 10, zone.name, {
          color: '#334155',
          fontSize: '16px',
          fontStyle: 'bold',
        })
        .setDepth(1);
    }

    this.add.rectangle(350, 455, 96, 52, 0x7b5c46).setStrokeStyle(2, 0x3f2d23);
    this.add.text(312, 438, 'TROPHY\nCASE', { color: '#ffffff', fontSize: '13px', align: 'center' });

    this.add.rectangle(145, 245, 150, 16, 0x8f6c52);
    this.add.rectangle(145, 275, 150, 16, 0x8f6c52);
    this.add.text(102, 232, 'BLEACHERS', { color: '#5c4436', fontSize: '12px' });

    this.add.rectangle(715, 435, 180, 55, 0xd39b66).setStrokeStyle(2, 0x8e623c);
    this.add.text(655, 418, 'SNACK COUNTER', { color: '#704927', fontSize: '12px', fontStyle: 'bold' });
  }

  private createHud(): void {
    this.add
      .text(24, 18, 'MYSTERY DASH — DEDUCTION PROTOTYPE', {
        color: '#102a56',
        fontSize: '21px',
        fontStyle: 'bold',
      })
      .setDepth(20);

    this.add
      .text(24, 48, 'Move: WASD/arrows  •  Investigate: E  •  Case Board: Tab  •  Accuse: 1–4 on board', {
        color: '#475569',
        fontSize: '13px',
      })
      .setDepth(20);

    this.clueText = this.add
      .text(676, 18, 'CLUES 0/3', {
        color: '#ffffff',
        backgroundColor: '#173c74',
        padding: { x: 10, y: 7 },
        fontSize: '15px',
        fontStyle: 'bold',
      })
      .setDepth(20);

    this.scoreText = this.add
      .text(792, 18, 'SCORE 0', {
        color: '#ffffff',
        backgroundColor: '#7c3aed',
        padding: { x: 10, y: 7 },
        fontSize: '15px',
        fontStyle: 'bold',
      })
      .setDepth(20);

    this.timerText = this.add
      .text(866, 54, '2:00', {
        color: '#173c74',
        fontSize: '18px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setDepth(20);
  }

  private createPlayer(): void {
    this.player = this.add.rectangle(350, 350, 34, 48, 0x7c3aed).setStrokeStyle(3, 0xffffff).setDepth(10);
    this.physics.add.existing(this.player);
    this.playerBody = this.player.body as Phaser.Physics.Arcade.Body;
    this.playerBody.setCollideWorldBounds(true);

    this.add.text(332, 320, 'ARI', { color: '#4c1d95', fontSize: '13px', fontStyle: 'bold' }).setDepth(11);
  }

  private createSuspects(): void {
    const suspects: Suspect[] = [
      { name: 'Nia', x: 525, y: 390, color: 0xec4899 },
      { name: 'Malik', x: 230, y: 165, color: 0x7c2d12 },
      { name: 'Zuri', x: 780, y: 165, color: 0x0f766e },
      { name: 'Jayden', x: 505, y: 150, color: 0x2563eb },
    ];

    for (const suspect of suspects) {
      const body = this.add.rectangle(suspect.x, suspect.y, 32, 44, suspect.color).setStrokeStyle(2, 0xffffff).setDepth(8);
      this.suspectBodies.set(suspect.name, body);

      this.add
        .text(suspect.x - 22, suspect.y - 38, suspect.name, {
          color: '#0f172a',
          backgroundColor: '#ffffff',
          padding: { x: 5, y: 2 },
          fontSize: '12px',
          fontStyle: 'bold',
        })
        .setDepth(9);

      this.tweens.add({
        targets: body,
        y: body.y + Phaser.Math.Between(-18, 18),
        duration: Phaser.Math.Between(1300, 2200),
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      });
    }
  }

  private createBehaviorDirector(): void {
    this.behaviorEvent = this.time.addEvent({
      delay: 2800,
      loop: true,
      callback: () => this.showNextBehaviorCue(),
    });
  }

  private showNextBehaviorCue(): void {
    if (this.roundEnded || this.caseBoardOpen) return;

    const name = SUSPECT_NAMES[this.behaviorTick % SUSPECT_NAMES.length];
    const body = this.suspectBodies.get(name);
    if (!body) return;

    const cycle = Math.floor(this.behaviorTick / SUSPECT_NAMES.length);
    const roleCanLookSuspicious = name === this.round.sneak || name === this.round.redHerring;
    const showSuspicious = roleCanLookSuspicious && cycle % 2 === 1;
    const cue = behaviorCueFor(name, showSuspicious, cycle);
    this.behaviorTick += 1;

    const bubble = this.add
      .text(body.x, body.y - 58, cue, {
        color: '#172033',
        backgroundColor: '#ffffff',
        padding: { x: 7, y: 4 },
        fontSize: '11px',
        fontStyle: showSuspicious ? 'bold' : 'normal',
      })
      .setOrigin(0.5)
      .setDepth(25)
      .setAlpha(0);

    this.tweens.add({
      targets: bubble,
      alpha: 1,
      y: bubble.y - 6,
      duration: 180,
      yoyo: true,
      hold: 1050,
      onComplete: () => bubble.destroy(),
    });
  }

  private createClues(): void {
    const positions = [
      { x: 405, y: 390 },
      { x: 755, y: 370 },
      { x: 490, y: 125 },
    ];

    this.clueMarkers = this.round.clues.map((evidence, index) => {
      const position = positions[index];
      const circle = this.add.circle(position.x, position.y, 13, 0xfacc15).setStrokeStyle(4, 0xffffff).setDepth(10);
      const label = this.add
        .text(position.x - 25, position.y - 34, `CLUE ${index + 1}`, {
          color: '#854d0e',
          fontSize: '12px',
          fontStyle: 'bold',
          backgroundColor: '#fff7cc',
          padding: { x: 4, y: 2 },
        })
        .setDepth(10);

      const visible = index === 0;
      circle.setVisible(visible);
      label.setVisible(visible);

      this.tweens.add({
        targets: circle,
        alpha: 0.45,
        duration: 650,
        yoyo: true,
        repeat: -1,
      });

      return { circle, label, evidence, found: false };
    });
  }

  private createCaseBoard(): void {
    const panel = this.add.rectangle(480, 270, 760, 420, 0xfffbeb, 0.99).setStrokeStyle(5, 0x173c74);
    const title = this.add.text(125, 82, 'THE GOLDEN SNEAKER CASE', {
      color: '#173c74',
      fontSize: '27px',
      fontStyle: 'bold',
    });

    this.caseEvidenceText = this.add.text(125, 132, '', {
      color: '#334155',
      fontSize: '15px',
      lineSpacing: 7,
      wordWrap: { width: 405 },
    });

    this.caseSuspectText = this.add.text(565, 132, '', {
      color: '#334155',
      fontSize: '17px',
      lineSpacing: 9,
    });

    const accuseLabel = this.add.text(565, 300, 'ACCUSE — click or press:', {
      color: '#173c74',
      fontSize: '15px',
      fontStyle: 'bold',
    });

    const buttons: Phaser.GameObjects.Text[] = [];
    SUSPECT_NAMES.forEach((name, index) => {
      const button = this.add
        .text(565 + (index % 2) * 145, 330 + Math.floor(index / 2) * 45, `${index + 1}. ${name}`, {
          color: '#ffffff',
          backgroundColor: '#173c74',
          padding: { x: 10, y: 7 },
          fontSize: '15px',
          fontStyle: 'bold',
        })
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.makeAccusation(name));
      buttons.push(button);
    });

    this.caseStatusText = this.add.text(125, 447, '', {
      color: '#7c2d12',
      fontSize: '14px',
      fontStyle: 'bold',
      wordWrap: { width: 600 },
    });

    const hint = this.add.text(565, 430, 'TAB closes board', {
      color: '#64748b',
      fontSize: '13px',
    });

    this.caseBoard = this.add
      .container(0, 0, [
        panel,
        title,
        this.caseEvidenceText,
        this.caseSuspectText,
        accuseLabel,
        ...buttons,
        this.caseStatusText,
        hint,
      ])
      .setDepth(50)
      .setVisible(false);
  }

  private bindInput(): void {
    if (!this.input.keyboard) return;

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D,E,TAB') as Record<
      'W' | 'A' | 'S' | 'D' | 'E' | 'TAB',
      Phaser.Input.Keyboard.Key
    >;

    this.keys.E.on('down', () => this.tryInvestigate());
    this.keys.TAB.on('down', (event: KeyboardEvent) => {
      event.preventDefault();
      if (this.roundEnded) return;
      this.caseBoardOpen = !this.caseBoardOpen;
      this.caseBoard.setVisible(this.caseBoardOpen);
      this.playerBody.setVelocity(0, 0);
      this.caseStatusText.setText(this.defaultCaseStatus());
    });

    this.accuseKeys = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR),
    ];

    this.accuseKeys.forEach((key, index) => {
      key.on('down', () => {
        if (!this.caseBoardOpen || this.roundEnded) return;
        this.makeAccusation(SUSPECT_NAMES[index]);
      });
    });

    this.restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.restartKey.on('down', () => {
      if (this.roundEnded) this.scene.restart();
    });
  }

  private defaultCaseStatus(): string {
    if (this.discoveredClues.length === 0) return 'Find at least one clue before accusing.';
    if (this.resolvedRedHerringSecret) {
      return `${this.round.redHerring}'s ${this.round.secret.title} explains the weird behavior — but check the full evidence.`;
    }
    if (this.discoveredClues.length >= 2) return 'You can investigate nearby kids with E to understand suspicious behavior.';
    return '';
  }

  private activeClueMarker(): ClueMarker | undefined {
    return this.clueMarkers.find((marker) => !marker.found && marker.circle.visible);
  }

  private tryInvestigate(): void {
    if (this.caseBoardOpen || this.roundEnded) return;

    const marker = this.activeClueMarker();
    if (marker) {
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, marker.circle.x, marker.circle.y);
      if (distance <= 66) {
        this.collectClue(marker);
        return;
      }
    }

    this.tryInvestigateSuspect();
  }

  private collectClue(marker: ClueMarker): void {
    marker.found = true;
    marker.circle.setVisible(false);
    marker.label.setVisible(false);
    this.discoveredClues.push(marker.evidence);
    this.score += 50;

    const next = this.clueMarkers.find((candidate) => !candidate.found);
    if (next) {
      next.circle.setVisible(true);
      next.label.setVisible(true);
    }

    this.refreshHud();
    this.refreshCaseBoard();
    this.showWorldPop(`CLUE FOUND +50\n${marker.evidence.title}`, '#7c3aed');
  }

  private tryInvestigateSuspect(): void {
    let nearestName: SuspectName | undefined;
    let nearestDistance = Number.POSITIVE_INFINITY;

    for (const name of SUSPECT_NAMES) {
      const body = this.suspectBodies.get(name);
      if (!body) continue;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, body.x, body.y);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestName = name;
      }
    }

    if (!nearestName || nearestDistance > 72) return;

    if (this.discoveredClues.length < 2) {
      this.showWorldPop('Watch their habits first.\nFind more evidence.', '#475569');
      return;
    }

    if (nearestName === this.round.redHerring && !this.resolvedRedHerringSecret) {
      this.resolvedRedHerringSecret = true;
      this.score += 100;
      this.refreshHud();
      this.refreshCaseBoard();
      this.caseStatusText.setText(
        `${nearestName}'s ${this.round.secret.title} explains the suspicious behavior — but they may still match other evidence.`,
      );
      this.showWorldPop(`SECRET EXPLAINED +100\n${this.round.secret.title}`, '#0f766e');
      return;
    }

    if (nearestName === this.round.redHerring && this.resolvedRedHerringSecret) {
      this.showWorldPop(`${nearestName}'s weird behavior is explained.\nKeep checking the evidence.`, '#0f766e');
      return;
    }

    if (nearestName === this.round.sneak) {
      this.showWorldPop(`${nearestName} is still acting unusual...\nThat is not proof yet.`, '#7c2d12');
      return;
    }

    this.showWorldPop(`${nearestName} seems normal right now.`, '#475569');
  }

  private showWorldPop(message: string, backgroundColor: string): void {
    const pop = this.add
      .text(this.player.x, this.player.y - 58, message, {
        color: '#ffffff',
        backgroundColor,
        padding: { x: 10, y: 6 },
        fontSize: '14px',
        fontStyle: 'bold',
        align: 'center',
      })
      .setOrigin(0.5)
      .setDepth(30);

    this.tweens.add({
      targets: pop,
      y: pop.y - 28,
      alpha: 0,
      duration: 1250,
      onComplete: () => pop.destroy(),
    });
  }

  private refreshHud(): void {
    this.clueText.setText(`CLUES ${this.discoveredClues.length}/3`);
    this.scoreText.setText(`SCORE ${this.score}`);
  }

  private refreshCaseBoard(): void {
    let evidenceLines = this.discoveredClues.length
      ? this.discoveredClues.map((clue, index) => `${index + 1}. ${clue.title}\n   ${clue.detail}`).join('\n\n')
      : 'No evidence yet. Explore the rec center and investigate the glowing clue.';

    if (this.resolvedRedHerringSecret) {
      evidenceLines += `\n\nBEHAVIOR NOTE\n${this.round.redHerring}: ${this.round.secret.title} explains the suspicious behavior, not the full evidence trail.`;
    }

    this.caseEvidenceText.setText(`EVIDENCE\n${evidenceLines}`);

    const plausible = matchingSuspects(this.discoveredClues);
    const suspectLines = SUSPECT_NAMES.map((name) => {
      if (this.wrongAccusations.has(name)) return `✕ ${name} — wrong guess`;
      if (this.discoveredClues.length === 0) return `? ${name}`;
      if (!plausible.includes(name)) return `✓ ${name} — cleared`;
      if (name === this.round.redHerring && this.resolvedRedHerringSecret) {
        return `⚠ ${name} — behavior explained`;
      }
      return `⚠ ${name} — still fits`;
    });

    this.caseSuspectText.setText(`SUSPECTS\n${suspectLines.join('\n')}`);
  }

  private makeAccusation(name: SuspectName): void {
    if (this.roundEnded) return;

    if (this.discoveredClues.length === 0) {
      this.caseStatusText.setText('Find at least one clue before accusing.');
      return;
    }

    if (this.wrongAccusations.has(name)) {
      this.caseStatusText.setText(`You already ruled out ${name}.`);
      return;
    }

    if (name === this.round.sneak) {
      const remainingSeconds = Math.max(0, Math.ceil((this.roundEndsAt - this.time.now) / 1000));
      const timeBonus = Math.min(100, remainingSeconds);
      this.score += 200 + timeBonus;
      this.refreshHud();
      this.endRound('solved', name, timeBonus);
      return;
    }

    this.score = Math.max(0, this.score - 50);
    this.wrongAccusations.add(name);
    this.refreshHud();
    this.refreshCaseBoard();
    this.caseStatusText.setText(`${name} was not the Sneak. −50. Keep investigating.`);
  }

  private updateTimer(): void {
    if (this.roundEnded) return;

    const remainingMs = Math.max(0, this.roundEndsAt - this.time.now);
    const seconds = Math.ceil(remainingMs / 1000);
    const minutesPart = Math.floor(seconds / 60);
    const secondsPart = String(seconds % 60).padStart(2, '0');
    this.timerText.setText(`${minutesPart}:${secondsPart}`);

    if (remainingMs <= 0) {
      this.endRound('timeout');
    }
  }

  private endRound(reason: 'solved' | 'timeout', accused?: SuspectName, timeBonus = 0): void {
    if (this.roundEnded) return;

    this.roundEnded = true;
    this.caseBoardOpen = false;
    this.caseBoard.setVisible(false);
    this.playerBody.setVelocity(0, 0);
    this.behaviorEvent?.remove(false);

    const solved = reason === 'solved';
    const heading = solved ? 'CASE SOLVED!' : 'TIME! CASE REVEALED';
    const resultLine = solved
      ? `${accused} was the Sneak. Nice deduction.`
      : `The Sneak was ${this.round.sneak}.`;

    const secretLine = `${this.round.redHerring} looked suspicious because of: ${this.round.secret.title}.`;
    const bonusLine = solved ? `Time bonus: +${timeBonus}` : 'Try another case and watch how the evidence changes.';

    const panel = this.add.rectangle(480, 270, 620, 330, 0x102a56, 0.98).setStrokeStyle(5, 0xfacc15);
    const title = this.add
      .text(480, 155, heading, { color: '#ffffff', fontSize: '30px', fontStyle: 'bold' })
      .setOrigin(0.5);
    const result = this.add
      .text(480, 215, `${resultLine}\n\n${secretLine}\n${this.round.secret.summary}\n\n${bonusLine}`, {
        color: '#e2e8f0',
        fontSize: '16px',
        align: 'center',
        wordWrap: { width: 520 },
        lineSpacing: 6,
      })
      .setOrigin(0.5);
    const score = this.add
      .text(480, 355, `FINAL SCORE ${this.score}`, { color: '#facc15', fontSize: '21px', fontStyle: 'bold' })
      .setOrigin(0.5);
    const replay = this.add
      .text(480, 405, 'PLAY AGAIN  —  press R or tap here', {
        color: '#102a56',
        backgroundColor: '#facc15',
        padding: { x: 18, y: 10 },
        fontSize: '17px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.scene.restart());

    this.revealPanel = this.add.container(0, 0, [panel, title, result, score, replay]).setDepth(100);
  }
}
