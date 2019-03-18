import { KeyboardEvent, useMemo } from 'react';
import {
  CellIndices,
  getNextPositionWrappedOrClamped,
  MoveDirection,
} from '../util/DirectionCalculator';
import { ensureDomIdIsCorrect } from '../util/DomIdValidator';
import { useGridNavigationOptionsFromContext } from './UseGridNavigationOptionsFromContext';

export interface UseGridNavigationOptions {
  /**
   * The row index for current cell.
   */
  rowIndex: number;
  /**
   * The column index for current cell.
   */
  colIndex: number;
  /**
   * Total number of rows in table. Must be set in cell hook or in GridHooksTable prop.
   */
  numRows?: number;
  /**
   * Total number of columns in table. Must be set in cell hook or in GridHooksTable prop.
   */
  numCols?: number;
  /**
   * An ID for the table, must be unique for every table in page. Must be set in cell hook or in GridHooksTable prop.
   */
  tableId?: string;
  /**
   * If true, navigation will wrap around the table. If false, navigation stops at table edge.
   */
  wrap?: boolean;
  /**
   * Callback that is invoked when user navigates to new cell by keyboard.
   */
  onCellMove?: CellMoveHandler;
}

export interface ValidatedUseGridNavigationOptions {
  rowIndex: number;
  colIndex: number;
  numRows: number;
  numCols: number;
  tableId: string;
  wrap?: boolean;
  onCellMove?: CellMoveHandler;
}

export interface UseGridNavigationResult {
  requiredProps: GridNavigationRequiredProps;
  moveHandler: MoveHandler;
}

/**
 * Props that must be passed to element with focus.
 */
export interface GridNavigationRequiredProps {
  tabIndex: number;
  onKeyDown: (e: KeyboardEvent) => boolean;
  id: string;
}

export type CellMoveHandler = (event: OnCellMoveEvent) => void;

export interface OnCellMoveEvent {
  fromRowIndex: number;
  fromColIndex: number;
  rowDidChange: boolean;
  colDidChange: boolean;
  rowIndex: number;
  colIndex: number;
}

export const useGridNavigation = (
  options: UseGridNavigationOptions,
): UseGridNavigationResult => {
  const {
    rowIndex,
    colIndex,
    numRows,
    numCols,
    tableId,
    wrap = false,
    onCellMove,
  } = useGridNavigationOptionsFromContext(options);

  const moveHandler = useMemo(
    () =>
      createMoveHandler(
        tableId,
        rowIndex,
        colIndex,
        numRows,
        numCols,
        wrap,
        onCellMove,
      ),
    [tableId, rowIndex, colIndex, numRows, numCols, wrap, onCellMove],
  );

  const onKeyDown = useMemo(() => createKeyDownHandler(moveHandler), [
    moveHandler,
  ]);

  const id = useMemo(() => createCellId(tableId, rowIndex, colIndex), [
    tableId,
    rowIndex,
    colIndex,
  ]);

  return {
    requiredProps: {
      tabIndex: 0,
      onKeyDown,
      id,
    },
    moveHandler,
  };
};

type MoveHandler = (direction: MoveDirection) => void;

const createMoveHandler = (
  tableId: string,
  rowIndex: number,
  colIndex: number,
  numRows: number,
  numCols: number,
  wrap: boolean,
  onCellMove?: CellMoveHandler,
): MoveHandler => direction => {
  const pos = getNextPositionWrappedOrClamped(
    rowIndex,
    colIndex,
    numRows,
    numCols,
    direction,
    wrap,
  );

  const colDidChange = colIndex !== pos.colIndex;
  const rowDidChange = rowIndex !== pos.rowIndex;

  if (colDidChange || rowDidChange) {
    if (onCellMove) {
      onCellMove({
        fromRowIndex: rowIndex,
        fromColIndex: colIndex,
        rowIndex: pos.rowIndex,
        colIndex: pos.colIndex,
        colDidChange,
        rowDidChange,
      });
    }
    focusOnCell(tableId, pos);
  }
};

const createCellId = (
  tableId: string,
  rowIndex: number,
  colIndex: number,
): string => ensureDomIdIsCorrect(`table-${tableId}-${rowIndex}-${colIndex}`);

const createKeyDownHandler = (moveHandler: MoveHandler) => (
  e: KeyboardEvent,
): boolean => {
  if (e.key === 'ArrowLeft') {
    moveHandler('left');
    e.preventDefault();
    e.stopPropagation();
    return true;
  } else if (e.key === 'ArrowUp') {
    moveHandler('up');
    e.preventDefault();
    e.stopPropagation();
    return true;
  } else if (e.key === 'ArrowRight') {
    moveHandler('right');
    e.preventDefault();
    e.stopPropagation();
    return true;
  } else if (e.key === 'ArrowDown') {
    moveHandler('down');
    e.preventDefault();
    e.stopPropagation();
    return true;
  } else {
    return false;
  }
};

export const focusOnCell = (tableId: string, pos: CellIndices) => {
  const el = (document.querySelector(
    `#${createCellId(tableId, pos.rowIndex, pos.colIndex)}`,
  ) ||
    document.querySelector(
      `#${createCellId(tableId, pos.rowIndex, pos.colIndex)}`,
    )) as HTMLElement;
  if (el) {
    el.focus();
  }
};
