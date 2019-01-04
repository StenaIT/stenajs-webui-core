import * as React from 'react';
import { useCallback, useState } from 'react';
import styled from 'react-emotion';
import { Colors } from '../../../freight-ca-web/app/src/ca/config/ui/Colors';
import { Background } from '../../src/components/ui/colors/Background';
import { DefaultTextInput } from '../../src/components/ui/form/text-input/DefaultTextInput';
import { Indent } from '../../src/components/ui/layout/Indent';
import { Row } from '../../src/components/ui/layout/Row';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { DefaultText } from '../../src/components/ui/text/DefaultText';
import { useGridCell } from '../../src/features/grid-hooks/hooks/UseGridCell';

export const createIndexArray = (length: number) =>
  Array.from(Array(length).keys());

const list10 = createIndexArray(10);

const FocusedBox = styled('div')(
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '68px',
    height: '34px',
  },
  ({ isEditable }: FocusedBoxProps) => ({
    ':focus': {
      outline: `${
        isEditable ? Colors.selectedCellBorder : Colors.disabledLight
      } solid 2px`,
    },
  }),
);

interface FocusedBoxProps {
  isEditable?: boolean;
}

const names = ['mattias', 'dennis', 'johan', 'anna', 'chris'];

const getRandomName = () => {
  const r = Math.floor(Math.random() * names.length);
  return names[r];
};

const createRows = () =>
  createIndexArray(10).map(() =>
    createIndexArray(10).map(() => getRandomName()),
  );

export const GridExample = () => {
  const [rows, setRows] = useState(createRows());

  const updateCell = useCallback(
    (rowIndex: number, colIndex: number, value: string | undefined) => {
      const copy = rows.map((row, iRow) => {
        if (iRow !== rowIndex) {
          return row;
        }
        return row.map((cell, iCol) => {
          if (iCol !== colIndex) {
            return cell;
          }
          return value || '';
        });
      });
      setRows(copy);
    },
    [rows, setRows],
  );

  return (
    <Spacing>
      <Indent>
        <div style={{ display: 'inline-block' }}>
          <Background color={Colors.white}>
            {rows.map((row, i) => (
              <Row key={i}>
                {row.map((item, j) => (
                  <GridCell
                    key={j}
                    value={item}
                    updateCell={updateCell}
                    rowIndex={i}
                    colIndex={j}
                    numRows={list10.length}
                    numCols={list10.length}
                  />
                ))}
              </Row>
            ))}
          </Background>
        </div>
      </Indent>
    </Spacing>
  );
};

interface GridCellProps {
  rowIndex: number;
  colIndex: number;
  numRows: number;
  numCols: number;
  value: string;
  updateCell: (row: number, col: number, value: string | undefined) => void;
}

const GridCell: React.FC<GridCellProps> = ({
  children,
  rowIndex,
  colIndex,
  numRows,
  numCols,
  value,
  updateCell,
}) => {
  const {
    requiredProps,
    isEditing,
    lastKeyEvent,
    stopEditing,
    stopEditingAndRevert,
    stopEditingAndMove,
    editorValue,
    setEditorValue,
  } = useGridCell(value, {
    rowIndex,
    colIndex,
    numRows,
    numCols,
    onChange: v => updateCell(rowIndex, colIndex, v),
    tableId: 'test',
    isEditable: true,
    wrap: false,
  });

  return (
    <FocusedBox {...requiredProps}>
      {isEditing ? (
        <DefaultTextInput
          onChange={setEditorValue}
          value={editorValue}
          onDone={stopEditing}
          onEsc={stopEditingAndRevert}
          focusOnMount
          selectAllOnMount={!lastKeyEvent}
          onMove={stopEditingAndMove}
        />
      ) : (
        <DefaultText>{value}</DefaultText>
      )}
    </FocusedBox>
  );
};
