export type Value = 'X' | 'O' | null;
export type BoardState = Value[];

const createBoardState = () => Array<Value>(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(boardState: BoardState) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
}
