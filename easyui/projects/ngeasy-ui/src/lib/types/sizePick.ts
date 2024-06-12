const eSizePick = {
  Small: 'Small',
  S: 'S',
  Medium: 'Medium',
  M: 'M',
  Large: 'Large',
  L: 'L',
  XLarge: 'XLarge',
  XL: 'XL',
} as const;

export type eSizePick = (typeof eSizePick)[keyof typeof eSizePick];
