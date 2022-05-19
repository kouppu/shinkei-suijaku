const MOVE = {
  FIRST: 'first',
  SECOND: 'second',
} as const;

export type MOVE = typeof MOVE[keyof typeof MOVE];
export const MOVE_VALUES = Object.values(MOVE);
