import { ComponentEnhancer, compose } from 'recompose';
import {
  CellIdGenerator,
  EditingHandlers,
  InjectedOnFocusProps,
  withEditingHandlers,
  withEditingState,
  WithEditingStateProps,
  WithIsEditableProps,
  withOnFocus,
} from './internal/WithEditStateHandler';
import {
  AllowedType,
  NavigationMoveDirection,
  WithKeyDownHandlerInnerProps,
  WithKeyDownHandlerOuterProps,
  withNavigatableKeyDownHandler,
} from './internal/WithNavigatableKeyDownHandler';

/*
ComponentEnhancer must be imported and used.
This is cause by the combination of --noUnusedLocals and --declaration.
 */
export type __C9134T = ComponentEnhancer<{}, {}>;

export const withTableNavigation = <
  T,
  OuterProps extends RequiredTableCellOuterProps<T>
>(
  type: AllowedType,
  getCellId: CellIdGenerator,
) =>
  compose(
    withEditingState,
    withOnFocus,
    withEditingHandlers<T, OuterProps>(getCellId),
    withNavigatableKeyDownHandler({ type }),
  );

export interface TableOnCellMoveEvent {
  fromRowIndex: number;
  fromColumnIndex: number;
  rowChange: boolean;
  columnChange: boolean;
  rowIndex: number;
  columnIndex: number;
}

export interface OnCellFocusEvent {
  rowIndex: number;
  columnIndex: number;
}

export interface RequiredTableCellOuterProps<T> extends WithIsEditableProps {
  columnIndex: number;
  rowIndex: number;
  numColumns: number;
  numRows: number;
  value: T;
  onCellMove?: (event: TableOnCellMoveEvent) => void;
  onCellFocus?: (event: OnCellFocusEvent) => void;
}

export type InjectedTableInnerProps<T> = WithKeyDownHandlerInnerProps &
  WithKeyDownHandlerOuterProps<T> &
  EditingHandlers &
  WithEditingStateProps &
  InjectedOnFocusProps;

export interface InputComponentProps {
  onMove?: (direction: NavigationMoveDirection) => void;
  onDblClick?: () => void;
  onStartEdit?: (enteredString: string) => void;
  onDone?: () => void;
  onDoneAndStay?: () => void;
  onEsc?: () => void;
}
