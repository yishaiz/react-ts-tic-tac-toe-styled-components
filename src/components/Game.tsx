import * as React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  gap: number;
};

const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

function Game() {
  return (
    <div>
      <h2>Hello Tic tac Toe</h2>
      <Row gap={2} />
    </div>
  );
}

export default Game;

// const Column = styled.div<LayoutProps>`
//   display: flex;
//   flex-direction: column;
//   gap: ${(props) => props.gap}px;
// `;
