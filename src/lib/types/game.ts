export type WoordType = {
  id: string;
  solution: string;
  pastGuesses: string[];
  rewarded: boolean;
  pastSolution: string;
};

export type BeeType = {
  id: string;
  results: string[];
  unique: string;
  letters: string[];
};

export type RewardType = {
  xp: number;
  amount: number;
  id: string;
  user: string;
  status: string;
  message: string;
  subscriber: string;
  receiver: string;
  country: string;
};

export type BeeWord = { letter: string; center: boolean };

export type SpellBeeType = {
  spellings: BeeWord[];
  letters: string[];
  results: string[];
  disabled: boolean;
};

export type MemoryCardType = { face: string; id: string };

export type PairsType = {
  id: string;
  matches: string[];
  moves: number;
  matched: number;
  dayWord: string;
};

export type ScrambledType = {
  id: string;
  solution: string;
  pastGuesses: string[];
  rewarded: boolean;
  pastSolution: string;
  scrambled: string;
};
