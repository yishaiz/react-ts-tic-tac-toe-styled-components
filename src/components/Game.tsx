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


function Game() {
  return (
    <Row gap={20}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </Row>
  );
}

export default Game;

// const Column = styled.div<LayoutProps>`
//   display: flex;
//   flex-direction: column;
//   gap: ${(props) => props.gap}px;
// `;
