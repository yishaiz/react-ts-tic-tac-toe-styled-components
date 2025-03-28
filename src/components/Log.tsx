import * as React from 'react';
import { BoardState } from './GameState';

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function Log({ history, jumpTo }: LogProps) {
  return (
    <ol>
      {history.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
