import * as React from 'react';
import styled from 'react-emotion';
import { compose } from 'recompose';
import { Border } from '../../../components/ui/decorations';
import { withDivCopyPasteListener } from '../../../components/ui/interaction/CopyPasteListener';
import { Row } from '../../../components/ui/layout';
import { DefaultText } from '../../../components/ui/text';
import { CellIdGenerator } from '../../../enhancers/table/internal/WithEditStateHandler';
import {
  InjectedTableInnerProps,
  RequiredTableCellOuterProps,
  withTableNavigation,
} from '../../../enhancers/table/WithTableNavigation';
import { SetCellFunc } from '../ExampleTable';
import { TextEditor } from './TextEditor';

export interface TableCellProps extends RequiredTableCellOuterProps {
  setCell: SetCellFunc;
}

const FocusedBox = withDivCopyPasteListener(styled('div')`
  box-sizing: border-box;
  border: 2px solid transparent;
  :focus {
    border: 2px solid blue;
    outline: 0;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`);

const getCellId: CellIdGenerator = (col, row) =>
  `block-field-cell-${col}-${row}`;

const TableCellComponent = ({
  value,
  rowIndex,
  columnIndex,
  onKeyDown,
  onDblClick,
  isEditing,
  onMove,
  onEsc,
  onDone,
  onDoneAndStay,
  enteredText,
  setCell,
  onFocus,
}: TableCellProps & InjectedTableInnerProps) => (
  <Border color={'#eee'} top left>
    <Row
      justifyContent={'center'}
      alignItems={'center'}
      height={'35px'}
      width={'35px'}
    >
      <FocusedBox
        id={getCellId(columnIndex, rowIndex)}
        onKeyDown={onKeyDown}
        onDoubleClick={onDblClick}
        tabIndex={0}
        onFocus={onFocus}
        style={{ width: '100%', height: '100%' }}
        onCopy={String(value)}
        onPaste={(val: string) => {
          setCell(columnIndex, rowIndex, val);
        }}
      >
        {isEditing ? (
          <TextEditor
            enteredText={enteredText}
            value={String(value)}
            focusOnMount
            selectAllOnMount={!enteredText}
            width={'100%'}
            onMove={onMove}
            onEsc={onEsc}
            onEnter={onDoneAndStay}
            onDone={val => {
              setCell(columnIndex, rowIndex, val);
              onDone();
            }}
          />
        ) : value === 5 ? (
          <DefaultText color={'blue'} bold>
            {value}
          </DefaultText>
        ) : (
          <DefaultText>{value}</DefaultText>
        )}
      </FocusedBox>
    </Row>
  </Border>
);

export const TableCell = compose<
  TableCellProps & InjectedTableInnerProps,
  TableCellProps
>(withTableNavigation<TableCellProps>('numeric', getCellId))(
  TableCellComponent,
);
