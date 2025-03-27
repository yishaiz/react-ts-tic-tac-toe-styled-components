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

const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

function Board() {
  return <div>TODO: board</div>;
}

function Log() {
  return (
    <ol>
      <li>
        <button>Got to move</button>
      </li>
    </ol>
  );
}

function Game() {
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>Test</div>
        <Board />
      </Column>
      <Log />
    </Row>
  );
}

export default Game;

// const Column = styled.div<LayoutProps>`
//   display: flex;
//   flex-direction: column;
//   gap: ${(props) => props.gap}px;
// `;
