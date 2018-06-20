import { compose, withHandlers, withState } from 'recompose';
import { CellIdGenerator } from '../../../examples/table/components/TableCell';
import { wrapBounds } from '../../../util/NumberBoundsWrapper';
import {
  NavigationMoveDirection,
  NavigatableKeyDownHandlerOnMove,
} from './WithNavigatableKeyDownHandler';
import {
  ComponentEnhancer,
  InferableComponentEnhancerWithProps,
} from 'recompose';
import { RequiredTableCellOuterProps } from '../WithTableNavigation';

/*
ComponentEnhancer and InferableComponentEnhancerWithProps must be imported and used.
This is cause by the combination of --noUnusedLocals and --declaration.
 */
export type __C81458 = ComponentEnhancer<{}, {}> &
  InferableComponentEnhancerWithProps<{}, {}>;

export interface OuterTableProps {
  columnIndex: number;
  rowIndex: number;
  numColumns: number;
  numRows: number;
  value: string | number;
}

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
    }: OuterProps &
      WithEditingStateProps): NavigatableKeyDownHandlerOnMove => direction => {
      setIsEditing(false);
      if (direction === 'up') {
        focusOnCell(getCellId, columnIndex, rowIndex - 1, numColumns, numRows);
      } else if (direction === 'down') {
        focusOnCell(getCellId, columnIndex, rowIndex + 1, numColumns, numRows);
      } else if (direction === 'left') {
        focusOnCell(getCellId, columnIndex - 1, rowIndex, numColumns, numRows);
      } else if (direction === 'right') {
        focusOnCell(getCellId, columnIndex + 1, rowIndex, numColumns, numRows);
      } else {
        focusOnCell(getCellId, columnIndex, rowIndex, numColumns, numRows);
      }
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
