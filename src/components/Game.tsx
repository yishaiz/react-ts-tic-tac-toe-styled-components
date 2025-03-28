import * as React from 'react';
import styled from 'styled-components';

import { useGameState } from './GameState';
import { Log } from './Log';
import { Board } from './Board';
import { Column, Row } from './Layout';

export const StyledSquare = styled.button`
  width: 34px;
  height: 34px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;

function Game() {
  const { gameState, current, xIsNext, jumpTo, winner, handleClick } =
    useGameState();

  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>
          {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? 'X' : 'O'} `}
        </div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
}

export default Game;
