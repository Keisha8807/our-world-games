import Phaser from 'phaser';

type Suspect = {
  name: 'Nia' | 'Malik' | 'Zuri' | 'Jayden';
  x: number;
  y: number;
  color: number;
};

export class PrototypeScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;
  private playerBody!: Phaser.Physics.Arcade.Body;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys!: Record<'W' | 'A' | 'S' | 'D' | 'E' | 'TAB', Phaser.Input.Keyboard.Key>;
  private clue!: Phaser.GameObjects.Arc;
  private clueFound = false;
  private caseBoard!: Phaser.GameObjects.Container;
  private caseBoardOpen = false;
  private clueText!: Phaser.GameObjects.Text;

  constructor() {
    super('prototype');
  }

  create(): void {
    this.physics.world.setBounds(0, 0, 960, 540);
    this.drawRecCenter();
    this.createHud();
    this.createPlayer();
    this.createSuspects();
    this.createClue();
    this.createCaseBoard();
    this.bindInput();
  }

  update(): void {
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

    if (!this.clueFound) {
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.clue.x, this.clue.y);
      if (distance < 54) {
        this.clue.setScale(1.25);
      } else {
        this.clue.setScale(1);
      }
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
      .text(24, 18, 'MYSTERY DASH — MOVEMENT PROTOTYPE', {
        color: '#102a56',
        fontSize: '22px',
        fontStyle: 'bold',
      })
      .setDepth(20);

    this.add
      .text(24, 48, 'Move: WASD / arrows   •   Investigate: E   •   Case Board: Tab', {
        color: '#475569',
        fontSize: '14px',
      })
      .setDepth(20);

    this.clueText = this.add
      .text(720, 20, 'CLUES 0/1', {
        color: '#ffffff',
        backgroundColor: '#173c74',
        padding: { x: 12, y: 7 },
        fontSize: '16px',
        fontStyle: 'bold',
      })
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

  private createClue(): void {
    this.clue = this.add.circle(410, 415, 13, 0xfacc15).setStrokeStyle(4, 0xffffff).setDepth(10);
    this.add.text(389, 383, 'CLUE', { color: '#854d0e', fontSize: '12px', fontStyle: 'bold' }).setDepth(10);

    this.tweens.add({
      targets: this.clue,
      alpha: 0.45,
      duration: 650,
      yoyo: true,
      repeat: -1,
    });
  }

  private createCaseBoard(): void {
    const panel = this.add.rectangle(480, 270, 620, 360, 0xfffbeb, 0.98).setStrokeStyle(5, 0x173c74);
    const title = this.add.text(245, 112, 'THE GOLDEN SNEAKER CASE', {
      color: '#173c74',
      fontSize: '28px',
      fontStyle: 'bold',
    });
    const evidence = this.add.text(245, 170, 'Evidence\n• Sneaker print: ?', {
      color: '#334155',
      fontSize: '20px',
      lineSpacing: 12,
    });
    const suspects = this.add.text(560, 170, 'Suspects\n? Nia\n? Malik\n? Zuri\n? Jayden', {
      color: '#334155',
      fontSize: '20px',
      lineSpacing: 8,
    });
    const hint = this.add.text(245, 438, 'TAB to close — the board shows facts, not the answer.', {
      color: '#64748b',
      fontSize: '15px',
    });

    this.caseBoard = this.add.container(0, 0, [panel, title, evidence, suspects, hint]).setDepth(50).setVisible(false);
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
      this.caseBoardOpen = !this.caseBoardOpen;
      this.caseBoard.setVisible(this.caseBoardOpen);
      this.playerBody.setVelocity(0, 0);
    });
  }

  private tryInvestigate(): void {
    if (this.clueFound || this.caseBoardOpen) return;

    const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.clue.x, this.clue.y);
    if (distance > 62) return;

    this.clueFound = true;
    this.clue.setVisible(false);
    this.clueText.setText('CLUES 1/1');

    const pop = this.add
      .text(this.player.x, this.player.y - 55, 'CLUE FOUND +50', {
        color: '#ffffff',
        backgroundColor: '#7c3aed',
        padding: { x: 10, y: 6 },
        fontSize: '16px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setDepth(30);

    this.tweens.add({
      targets: pop,
      y: pop.y - 28,
      alpha: 0,
      duration: 900,
      onComplete: () => pop.destroy(),
    });
  }
}
