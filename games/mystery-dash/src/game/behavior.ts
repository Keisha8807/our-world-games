import type { SuspectName } from './deduction';

export type BehaviorProfile = {
  baseline: string[];
  suspicious: string[];
};

export const BEHAVIOR_PROFILES: Record<SuspectName, BehaviorProfile> = {
  Nia: {
    baseline: ['checks backpack', 'chats with a friend', 'rolls a braid while thinking'],
    suspicious: ['hurries around the corner', 'twists her braid much faster', 'avoids the direct hallway'],
  },
  Malik: {
    baseline: ['dribble... dribble...', 'spins the basketball', 'checks the gym'],
    suspicious: ['stops dribbling suddenly', 'tucks the ball under one arm', 'changes route fast'],
  },
  Zuri: {
    baseline: ['checks her art pouch', 'studies a poster', 'gestures while explaining something'],
    suspicious: ['holds the art pouch tight', 'leaves the art area quickly', 'hides a small object'],
  },
  Jayden: {
    baseline: ['tap tap with his thumbs', 'checks a shortcut', 'pretends to use a controller'],
    suspicious: ['thumb tapping stops', 'puts both hands in his pockets', 'detours away from the game room'],
  },
};

export const behaviorCueFor = (
  name: SuspectName,
  suspicious: boolean,
  index: number,
): string => {
  const list = suspicious ? BEHAVIOR_PROFILES[name].suspicious : BEHAVIOR_PROFILES[name].baseline;
  return list[index % list.length] as string;
};
