import * as React from 'react';
import { Row } from '../../../src/components/ui/layout/index';
import {
  OnCellFocusEvent,
  TableOnCellMoveEvent,
} from '../../../src/features/table/WithTableNavigation';
import { CellData, SetCellFunc, TableCell } from './TableCell';

export interface TableRowProps {
  row: Array<CellData>;
  rowIndex: number;
  numRows: number;
  setCell: SetCellFunc;
  onCellFocus: (event: OnCellFocusEvent) => void;
  onCellMove: (event: TableOnCellMoveEvent) => void;
}
export const TableRow = ({
  row,
  rowIndex,
  numRows,
  setCell,
  onCellFocus,
  onCellMove,
}: TableRowProps) => (
  <Row>
    {row.map((value, columnIndex) => (
      <TableCell
        key={columnIndex}
        columnIndex={columnIndex}
        rowIndex={rowIndex}
        value={value}
        numRows={numRows}
        numColumns={row.length}
        isEditable
        setCell={setCell}
        onCellFocus={onCellFocus}
        onCellMove={onCellMove}
      />
    ))}
  </Row>
);
