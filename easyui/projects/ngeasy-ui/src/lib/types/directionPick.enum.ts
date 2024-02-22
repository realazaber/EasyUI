const eDirection = {
  Col: 'Col',
  Row: 'Row',
  ColRev: 'ColRev',
  RowRev: 'RowRev',
} as const;

export type eDirection = (typeof eDirection)[keyof typeof eDirection];
