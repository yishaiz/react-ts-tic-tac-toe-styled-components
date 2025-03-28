import * as React from 'react';
import { StyledSquare } from './Game';
import { Value } from './GameState';

export type SquareProps = {
  value: Value;
  onClick: () => void;
};

export function Square({ value, onClick }: SquareProps) {
  return <StyledSquare onClick={onClick}>{value}</StyledSquare>;
}
