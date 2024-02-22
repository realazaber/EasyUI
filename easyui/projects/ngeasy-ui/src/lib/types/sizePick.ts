const eSizePick = {
  Small: 'Small',
  Medium: 'Medium',
  Large: 'Large',
  XLarge: 'XLarge',
} as const;

export type eSizePick = (typeof eSizePick)[keyof typeof eSizePick];
