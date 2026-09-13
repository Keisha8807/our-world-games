export const SUSPECT_NAMES = ['Nia', 'Malik', 'Zuri', 'Jayden'] as const;

export type SuspectName = (typeof SUSPECT_NAMES)[number];
export type EvidenceCategory = 'physical' | 'location' | 'behavioral';
export type EvidenceStage = 1 | 2 | 3;

export type EvidenceRecord = {
  id: string;
  stage: EvidenceStage;
  category: EvidenceCategory;
  title: string;
  detail: string;
  matches: SuspectName[];
};

export type SecretTemplate = {
  id: string;
  title: string;
  summary: string;
};

export type MysteryRound = {
  sneak: SuspectName;
  redHerring: SuspectName;
  secret: SecretTemplate;
  clues: [EvidenceRecord, EvidenceRecord, EvidenceRecord];
};

type EvidenceTemplate = {
  id: string;
  stage: EvidenceStage;
  category: EvidenceCategory;
  title: string;
  detail: string;
};

const EVIDENCE_TEMPLATES: EvidenceTemplate[] = [
  {
    id: 'broad-hallway-frame',
    stage: 1,
    category: 'location',
    title: 'Blurry Hallway Frame',
    detail: 'The quick hallway image is too fuzzy to identify one kid, but it rules one person out.',
  },
  {
    id: 'broad-floor-scuff',
    stage: 1,
    category: 'physical',
    title: 'Fresh Floor Scuff',
    detail: 'A fresh mark near the trophy hall could have come from three of the kids in this round.',
  },
  {
    id: 'broad-door-chime',
    stage: 1,
    category: 'location',
    title: 'Door Chime Timing',
    detail: 'The rec-center door chime narrows the timing, but three kids still fit.',
  },
  {
    id: 'broad-route-change',
    stage: 1,
    category: 'behavioral',
    title: 'Sudden Route Change',
    detail: 'Three kids changed direction around the same time. Suspicious, but not enough to accuse.',
  },
  {
    id: 'pair-trophy-route',
    stage: 2,
    category: 'location',
    title: 'Trophy Hall Route',
    detail: 'Only two kids could have reached the trophy hall during the missing-time window.',
  },
  {
    id: 'pair-object-trace',
    stage: 2,
    category: 'physical',
    title: 'Dropped Object Trace',
    detail: 'A small trace from something carried through the hall matches only two suspects this round.',
  },
  {
    id: 'pair-camera-gap',
    stage: 2,
    category: 'location',
    title: 'Camera Gap',
    detail: 'The camera misses part of the hall, but the timestamps leave only two plausible kids.',
  },
  {
    id: 'pair-baseline-break',
    stage: 2,
    category: 'behavioral',
    title: 'Behavior Break',
    detail: 'Two kids broke from their normal habits during the important minute. One may be a red herring.',
  },
  {
    id: 'final-time-check',
    stage: 3,
    category: 'location',
    title: 'Final Timing Check',
    detail: 'The last timing comparison leaves exactly one kid who could have moved the Golden Sneaker.',
  },
  {
    id: 'final-clear-frame',
    stage: 3,
    category: 'location',
    title: 'Clear Camera Frame',
    detail: 'A clearer frame catches one final route detail that only the Sneak matches.',
  },
  {
    id: 'final-physical-match',
    stage: 3,
    category: 'physical',
    title: 'Exact Physical Match',
    detail: 'The final physical trace matches one suspect and clears the last innocent kid.',
  },
  {
    id: 'final-behavior-timing',
    stage: 3,
    category: 'behavioral',
    title: 'Behavior + Timing Match',
    detail: 'One suspect\'s unusual movement lines up with the exact missing-time window.',
  },
];

export const SECRET_TEMPLATES: SecretTemplate[] = [
  {
    id: 'broken-controller',
    title: 'Broken Controller',
    summary: 'They accidentally cracked a controller and are hiding it because they think they will get in trouble.',
  },
  {
    id: 'birthday-surprise',
    title: 'Birthday Surprise',
    summary: 'They are secretly hiding a cupcake, card, or small decoration for someone at the rec center.',
  },
  {
    id: 'art-mistake',
    title: 'Art Project Mistake',
    summary: 'They accidentally messed up part of a rec-center art project and are trying to fix it quietly.',
  },
  {
    id: 'snack-stash',
    title: 'Snack Stash',
    summary: 'They hid extra snacks and are trying not to get caught with them.',
  },
];

const pick = <T>(items: readonly T[], rng: () => number): T => {
  return items[Math.floor(rng() * items.length)] as T;
};

const shuffle = <T>(items: readonly T[], rng: () => number): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const templateForStage = (stage: EvidenceStage, rng: () => number): EvidenceTemplate => {
  return pick(
    EVIDENCE_TEMPLATES.filter((template) => template.stage === stage),
    rng,
  );
};

const materialize = (template: EvidenceTemplate, matches: SuspectName[]): EvidenceRecord => ({
  ...template,
  matches: [...matches],
});

export const matchingSuspects = (clues: readonly EvidenceRecord[]): SuspectName[] => {
  if (clues.length === 0) return [...SUSPECT_NAMES];

  return SUSPECT_NAMES.filter((name) => clues.every((clue) => clue.matches.includes(name)));
};

export const validateRound = (round: MysteryRound): boolean => {
  const afterOne = matchingSuspects(round.clues.slice(0, 1));
  const afterTwo = matchingSuspects(round.clues.slice(0, 2));
  const afterThree = matchingSuspects(round.clues);

  return (
    afterOne.length >= 3 &&
    afterOne.includes(round.sneak) &&
    afterTwo.length === 2 &&
    afterTwo.includes(round.sneak) &&
    afterTwo.includes(round.redHerring) &&
    afterThree.length === 1 &&
    afterThree[0] === round.sneak
  );
};

export const generateRound = (rng: () => number = Math.random): MysteryRound => {
  const sneak = pick(SUSPECT_NAMES, rng);
  const innocentNames = SUSPECT_NAMES.filter((name) => name !== sneak);
  const redHerring = pick(innocentNames, rng);
  const broadThird = pick(
    innocentNames.filter((name) => name !== redHerring),
    rng,
  );

  const broadMatches = shuffle([sneak, redHerring, broadThird], rng);
  const pairMatches = shuffle([sneak, redHerring], rng);
  const finalMatches = [sneak];

  const clues: [EvidenceRecord, EvidenceRecord, EvidenceRecord] = [
    materialize(templateForStage(1, rng), broadMatches),
    materialize(templateForStage(2, rng), pairMatches),
    materialize(templateForStage(3, rng), finalMatches),
  ];

  const round: MysteryRound = {
    sneak,
    redHerring,
    secret: pick(SECRET_TEMPLATES, rng),
    clues,
  };

  if (!validateRound(round)) {
    throw new Error('Mystery Dash generated an invalid deduction round.');
  }

  return round;
};
