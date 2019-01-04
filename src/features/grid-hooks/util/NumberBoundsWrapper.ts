import { CellIndices } from './DirectionCalculator';

export const clampPos = (
  pos: CellIndices,
  numRows: number,
  numCols: number,
): CellIndices => {
  return {
    rowIndex: limitRange(pos.rowIndex, 0, numRows),
    colIndex: limitRange(pos.colIndex, 0, numCols),
  };
};

export const wrapPos = (
  pos: CellIndices,
  numRows: number,
  numCols: number,
): CellIndices => {
  const wrapped = wrapBounds(pos.colIndex, pos.rowIndex, numCols, numRows);
  return {
    rowIndex: wrapped.realY,
    colIndex: wrapped.realX,
  };
};

export const wrapBounds = (
  x: number,
  y: number,
  maxX: number,
  maxY: number,
): { realX: number; realY: number } => {
  let realX = x;
  let realY = y;
  if (y > maxY) {
    realY = 0;
  }
  if (y < 0) {
    realY = maxY;
  }
  if (x > maxX) {
    realX = 0;
  }
  if (x < 0) {
    realX = maxX;
  }
  return {
    realX,
    realY,
  };
};

export const wrapBoundsNextLine = (
  x: number,
  y: number,
  maxX: number,
  maxY: number,
): { realX: number; realY: number } => {
  let realX = x;
  let realY = y;
  while (realX < 0) {
    realY--;
    realX += maxX + 1;
  }
  while (realX > maxX) {
    realY++;
    realX -= maxX + 1;
  }
  if (y > maxY) {
    realY = 0;
  }
  if (y < 0) {
    realY = maxY;
  }
  return {
    realX: limitRange(realX, 0, maxX),
    realY: limitRange(realY, 0, maxY),
  };
};

export const limitRange = (val: number, min: number, max: number): number => {
  return Math.max(Math.min(val, max), min);
};
