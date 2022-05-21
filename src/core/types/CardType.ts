const CARD_TYPE = {
  SPADE: 'spade',
  HEART: 'heart',
  DIAMOND: 'diamond',
  CLUB: 'club',
} as const;

export type CARD_TYPE = typeof CARD_TYPE[keyof typeof CARD_TYPE];
export const CARD_TYPE_VALUES = Object.values(CARD_TYPE);
