const eBgColorPick = {
  Primary: 'Primary',
  Secondary: 'Secondary',
  Accent: 'Accent',
  Success: 'Success',
  Warning: 'Warning',
  Danger: 'Danger',
  Info: 'Info',
} as const;

export type eBgColorPick = (typeof eBgColorPick)[keyof typeof eBgColorPick];
