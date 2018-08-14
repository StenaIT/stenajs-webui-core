import { ComponentEnhancer, compose } from 'recompose';
import { CellIdGenerator } from '../../examples/table/components/TableCell';
import {
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
  OuterProps extends RequiredTableCellOuterProps
>(
  type: AllowedType,
  getCellId: CellIdGenerator,
) =>
  compose(
    withEditingState,
    withOnFocus,
    withEditingHandlers<OuterProps>(getCellId),
    withNavigatableKeyDownHandler({ type }),
  );

export interface OnCellMoveEvent {
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

export interface RequiredTableCellOuterProps extends WithIsEditableProps {
  columnIndex: number;
  rowIndex: number;
  numColumns: number;
  numRows: number;
  value: string | number;
  onCellMove?: (event: OnCellMoveEvent) => void;
  onCellFocus?: (event: OnCellFocusEvent) => void;
}

export type InjectedTableInnerProps = WithKeyDownHandlerInnerProps &
  WithKeyDownHandlerOuterProps &
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
