import { compose } from 'recompose';
import { CellIdGenerator } from '../../examples/table/components/TableCell';
import {
  EditingHandlers,
  withEditingHandlers,
  withEditingState,
  WithEditingStateProps,
  WithIsEditableProps,
} from './internal/WithEditStateHandler';
import {
  AllowedType,
  MoveDirection,
  WithKeyDownHandlerInnerProps,
  WithKeyDownHandlerOuterProps,
  withNavigatableKeyDownHandler,
} from './internal/WithNavigatableKeyDownHandler';
import { ComponentEnhancer } from 'recompose';

/*
ComponentEnhancer must be imported and used.
This is cause by the combination of --noUnusedLocals and --declaration.
 */
export type __C = ComponentEnhancer<{}, {}>;

export const withTableNavigation = <
  OuterProps extends RequiredTableCellOuterProps
>(
  type: AllowedType,
  getCellId: CellIdGenerator,
) =>
  compose(
    withEditingState,
    withEditingHandlers<OuterProps>(getCellId),
    withNavigatableKeyDownHandler({ type }),
  );

export interface RequiredTableCellOuterProps extends WithIsEditableProps {
  columnIndex: number;
  rowIndex: number;
  numColumns: number;
  numRows: number;
  value: string | number;
}

export type InjectedTableInnerProps = WithKeyDownHandlerInnerProps &
  WithKeyDownHandlerOuterProps &
  EditingHandlers &
  WithEditingStateProps;

export interface InputComponentProps {
  onMove?: (direction: MoveDirection) => void;
  onDblClick?: () => void;
  onStartEdit?: (enteredString: string) => void;
  onDone?: () => void;
  onDoneAndStay?: () => void;
  onEsc?: () => void;
}
