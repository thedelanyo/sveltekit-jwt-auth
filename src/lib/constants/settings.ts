const BASE_PERCENT = 20 / 100;
const BASE_XP = 10;

export const MAX_WORD_LENGTH = 5;
export const MAX_CHALLENGES = 6;
export const CELL_ANIMATION_DURATION = 500;
export const CELL_ANIMATION_DELAY = 425;
export const KEYBOARD_DELAY = CELL_ANIMATION_DELAY * (MAX_WORD_LENGTH - 1);

export const AD_IMPRESSION_VALUE = 0.5;
export const INTERSTITIAL_VALUE = 0.3;
export const AD_PROMOTION = true;
export const PROMO_VALUE = 0.2;

const AD_PROMO = AD_IMPRESSION_VALUE - PROMO_VALUE;
const INTERS_PROMO = INTERSTITIAL_VALUE - PROMO_VALUE;

export const PROMOS = {
  impression: parseFloat(
    Math.fround(AD_PROMO < 0 ? 0 : AD_PROMO).toPrecision(1)
  ),
  inters: parseFloat(
    Math.fround(INTERS_PROMO < 0 ? 0 : INTERS_PROMO).toPrecision(1)
  ),
};

export const BASE_VALUE = AD_IMPRESSION_VALUE * BASE_PERCENT;

export const WIN_MESSAGES = [
  "Genius!",
  "Magnificent",
  "Impressive!",
  "Splendid.",
  "Nice!",
  "Phew!",
];

export const WIN_REWARDS = [50, 40, 30, 20, 15, 10];
export const SCRAM_REWARDS = [30, 20, 10];

export const ValueToXP = (value: number): number => {
  return Math.ceil((BASE_XP * value) / BASE_VALUE);
};

export const XPToValue = (xp: number): number => {
  return Math.ceil((BASE_VALUE * xp) / BASE_XP);
};

export const STREAK_REWARD = ValueToXP(1.5);
export const WIN_STREAK_REWARD = ValueToXP(1.5);
