import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { Border } from '../../components/ui/decorations';
import { TableRow } from './components/TableRow';

export type CellData = string | number;
type Data = Array<Array<CellData>>;
const data: Data = [];
for (let y = 0; y < 20; y++) {
  data[y] = [];
  for (let x = 0; x < 20; x++) {
    data[y][x] = x * y;
  }
}

type InnerProps = WithSetCellHandlerProps;

const ExampleTableComponent = ({ setCell }: InnerProps) => (
  <div style={{ display: 'table' }}>
    <Border color={'#eee'} bottom right>
      {data.map((row, rowIndex) => (
        <TableRow
          row={row}
          rowIndex={rowIndex}
          key={rowIndex}
          numRows={data.length}
          setCell={setCell}
        />
      ))}
    </Border>
  </div>
);

interface WithDataStateProps {
  data: Data;
  setData: (data: Data) => void;
}

const withDataState = withState('data', 'setData', data);

export type SetCellFunc = (col: number, row: number, value: string) => void;

export interface WithSetCellHandlerProps {
  setCell: SetCellFunc;
}

const withSetCellHandler = withHandlers({
  setCell: ({ setData, data }: WithDataStateProps) => (
    col: number,
    row: number,
    value: string,
  ) => {
    data[row][col] = value;
    setData([...data]);
  },
});

export const ExampleTable = compose<InnerProps, {}>(
  withDataState,
  withSetCellHandler,
)(ExampleTableComponent);
