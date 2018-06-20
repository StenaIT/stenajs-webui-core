import * as React from 'react';
import { Row } from '../../../components/ui/layout';
import { CellData, SetCellFunc } from '../ExampleTable';
import { TableCell } from './TableCell';

export interface TableRowProps {
  row: Array<CellData>;
  rowIndex: number;
  numRows: number;
  setCell: SetCellFunc;
}
export const TableRow = ({
  row,
  rowIndex,
  numRows,
  setCell,
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
      />
    ))}
  </Row>
);
