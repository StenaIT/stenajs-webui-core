import * as React from 'react';
import { compose, pure, withHandlers, withState } from 'recompose';
import { Border } from '../../src/components/ui/decorations/index';
import { OnCellFocusEvent, OnCellMoveEvent, } from '../../src/enhancers/table/WithTableNavigation';
import { CellData, SetCellFunc } from './components';
import { TableRow } from './components/TableRow';

type Data = Array<Array<CellData>>;
const initialData: Data = [];
for (let y = 0; y < 20; y++) {
  initialData[y] = [];
  for (let x = 0; x < 20; x++) {
    initialData[y][x] = `${x * y}`;
  }
}

export interface ExampleTableProps {
  onCellFocus: (event: OnCellFocusEvent) => void;
  onCellMove: (event: OnCellMoveEvent) => void;
}

type InnerProps = WithSetCellHandlerProps &
  WithDataStateProps &
  ExampleTableProps;

const ExampleTableComponent = ({
  setCell,
  data,
  onCellFocus,
  onCellMove,
}: InnerProps) => (
  <div style={{ display: 'table' }}>
    <Border color={'#eee'} bottom right>
      {data.map((row, rowIndex) => (
        <TableRow
          row={row}
          rowIndex={rowIndex}
          key={rowIndex}
          numRows={data.length}
          setCell={setCell}
          onCellFocus={onCellFocus}
          onCellMove={onCellMove}
        />
      ))}
    </Border>
  </div>
);

interface WithDataStateProps {
  data: Data;
  setData: (data: Data) => void;
}

const withDataState = compose<{}, WithDataStateProps>(
  withState('data', 'setData', initialData),
);

export interface WithSetCellHandlerProps {
  setCell: SetCellFunc;
}

// tslint:disable:no-shadowed-variable
const withSetCellHandler = withHandlers<
  WithDataStateProps,
  WithSetCellHandlerProps
>({
  setCell: ({ setData, data }) => (col: number, row: number, value: CellData) => {
    data[row][col] = value;
    setData([...data]);
  },
});
// tslint:enable:no-shadowed-variable

export const ExampleTable = compose<InnerProps, ExampleTableProps>(
  pure,
  withDataState,
  withSetCellHandler,
)(ExampleTableComponent);
