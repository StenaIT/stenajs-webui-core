import { FocusEventHandler } from 'react';
import {
  ComponentEnhancer,
  compose,
  InferableComponentEnhancerWithProps,
  withHandlers,
  withState,
} from 'recompose';
import { MoveDirection } from '../../../components/ui/form/text-input';
import { wrapBounds } from '../../../util/bounds/NumberBoundsWrapper';
import { RequiredTableCellOuterProps } from '../WithTableNavigation';
import {
  NavigatableKeyDownHandlerOnMove,
  NavigationMoveDirection,
} from './WithNavigatableKeyDownHandler';

/*
ComponentEnhancer and InferableComponentEnhancerWithProps must be imported and used.
This is cause by the combination of --noUnusedLocals and --declaration.
 */
export type __C81458 = ComponentEnhancer<{}, {}> &
  InferableComponentEnhancerWithProps<{}, {}>;

export type CellIdGenerator = (col: number, row: number) => string;

export interface CellIndices {
  columnIndex: number;
  rowIndex: number;
}

export interface OuterTableProps {
  columnIndex: number;
  rowIndex: number;
  numColumns: number;
  numRows: number;
  value: string | number;
}

export interface InjectedOnFocusProps {
  onFocus?: FocusEventHandler<HTMLDivElement>;
}

export const withOnFocus = withHandlers<
  RequiredTableCellOuterProps,
  InjectedOnFocusProps
>({
  onFocus: ({ columnIndex, rowIndex, onCellFocus }) => () => {
    if (onCellFocus) {
      onCellFocus({ columnIndex, rowIndex });
    }
  },
});

export interface WithEditingStateProps {
  isEditing: boolean;
  enteredText: string;
  setIsEditing: (isEditing: boolean) => void;
  setEnteredText: (enteredText: string) => void;
}

export interface WithEditingHandlersProps {
  onMove: (direction: NavigationMoveDirection) => void;
  onDblClick: () => void;
  onStartEdit: (enteredText: string) => void;
  onDoneAndStay: () => void;
  onDone: () => void;
  onEsc: () => void;
}

export interface WithIsEditableProps {
  isEditable: boolean;
}

export const withEditingState = compose(
  withState('isEditing', 'setIsEditing', false),
  withState('enteredText', 'setEnteredText', undefined),
);

export interface EditingHandlers {
  onMove: (direction: NavigationMoveDirection) => void;
  onDblClick: () => void;
  onStartEdit: (enteredString: string) => void;
  onDone: () => void;
  onDoneAndStay: () => void;
  onEsc: () => void;
}

export const withEditingHandlers = <
  OuterProps extends RequiredTableCellOuterProps
>(
  getCellId: CellIdGenerator,
) =>
  withHandlers<OuterProps & WithEditingStateProps, EditingHandlers>({
    onMove: ({
      columnIndex,
      rowIndex,
      setIsEditing,
      numColumns,
      numRows,
      onCellMove,
    }: OuterProps &
      WithEditingStateProps): NavigatableKeyDownHandlerOnMove => direction => {
      setIsEditing(false);
      const {
        columnIndex: nextColumnIndex,
        rowIndex: nextRowIndex,
      } = getIndices(columnIndex, rowIndex, direction);

      if (onCellMove) {
        onCellMove({
          fromRowIndex: rowIndex,
          fromColumnIndex: columnIndex,
          rowIndex: nextRowIndex,
          columnIndex: nextColumnIndex,
          columnChange: columnIndex !== nextColumnIndex,
          rowChange: rowIndex !== nextRowIndex,
        });
      }
      focusOnCell(
        getCellId,
        nextColumnIndex,
        nextRowIndex,
        numColumns,
        numRows,
      );
    },
    onDblClick: ({
      setEnteredText,
      setIsEditing,
      value,
    }: WithEditingStateProps & OuterProps) => () => {
      setEnteredText(String(value));
      setIsEditing(true);
    },
    onStartEdit: ({ setEnteredText, setIsEditing }: WithEditingStateProps) => (
      enteredText: string,
    ) => {
      setEnteredText(enteredText);
      setIsEditing(true);
    },
    onDone: ({ setIsEditing }: WithEditingStateProps & OuterProps) => () => {
      setIsEditing(false);
    },
    onDoneAndStay: ({
      setIsEditing,
      columnIndex,
      rowIndex,
      numColumns,
      numRows,
    }: WithEditingStateProps & OuterProps) => () => {
      setIsEditing(false);
      focusOnCell(getCellId, columnIndex, rowIndex, numColumns, numRows);
    },
    onEsc: ({
      setIsEditing,
      columnIndex,
      rowIndex,
      numColumns,
      numRows,
    }: WithEditingStateProps & OuterProps) => () => {
      setIsEditing(false);
      focusOnCell(getCellId, columnIndex, rowIndex, numColumns, numRows);
    },
  });

const getIndices = (
  columnIndex: number,
  rowIndex: number,
  direction: MoveDirection,
): CellIndices => {
  if (direction === 'up') {
    return {
      columnIndex,
      rowIndex: rowIndex - 1,
    };
  }
  if (direction === 'down') {
    return {
      columnIndex,
      rowIndex: rowIndex + 1,
    };
  }
  if (direction === 'left') {
    return {
      columnIndex: columnIndex - 1,
      rowIndex,
    };
  }
  if (direction === 'right') {
    return {
      columnIndex: columnIndex + 1,
      rowIndex,
    };
  }
  return {
    columnIndex,
    rowIndex,
  };
};

const focusOnCell = (
  getCellId: CellIdGenerator,
  columnIndex: number,
  rowIndex: number,
  numColumns: number,
  numRows: number,
) => {
  const { realX: col, realY: row } = wrapBounds(
    columnIndex,
    rowIndex,
    numColumns - 1,
    numRows - 1,
  );
  const el = (document.querySelector(`#${getCellId(col, row)}`) ||
    document.querySelector(`#${getCellId(col, row)}`)) as HTMLElement;
  if (el) {
    el.focus();
  }
};
