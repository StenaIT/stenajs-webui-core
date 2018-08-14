import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { Background } from '../../components/ui/colors';
import { Indent, Space } from '../../components/ui/layout';
import {
  OnCellFocusEvent,
  OnCellMoveEvent,
} from '../../enhancers/table/WithTableNavigation';
import { ExampleTable } from './ExampleTable';

type InnerProps = WithDataStateProps & WithOnCellFocusProps;

const TableExampleComponent = ({
  focusEvent,
  moveEvent,
  onCellFocus,
  onCellMove,
}: InnerProps) => (
  <div>
    <Background color={'#e2e2e2'} style={{ display: 'table' }}>
      <Indent>
        <pre>
          focusEvent: {JSON.stringify(focusEvent)}
          {'\n'}
          moveEvent: {JSON.stringify(moveEvent)}
        </pre>
      </Indent>
    </Background>
    <Space num={2} />
    <ExampleTable onCellFocus={onCellFocus} onCellMove={onCellMove} />
  </div>
);

interface WithDataStateProps {
  moveEvent: OnCellMoveEvent;
  focusEvent: OnCellFocusEvent;
  setMoveEvent: (moveEvent: OnCellMoveEvent) => void;
  setFocusEvent: (focusEvent: OnCellFocusEvent) => void;
}

const withDataState = compose<{}, WithDataStateProps>(
  withState('focusEvent', 'setFocusEvent', undefined),
  withState('moveEvent', 'setMoveEvent', undefined),
);

interface WithOnCellFocusProps {
  onCellFocus: (event: OnCellFocusEvent) => void;
  onCellMove: (event: OnCellMoveEvent) => void;
}

const withOnCellFocus = withHandlers<WithDataStateProps, WithOnCellFocusProps>({
  onCellFocus: ({ setFocusEvent }) => event => {
    setFocusEvent(event);
  },
  onCellMove: ({ setMoveEvent }) => event => {
    setMoveEvent(event);
  },
});

export const TableExample = compose<InnerProps, {}>(
  withDataState,
  withOnCellFocus,
)(TableExampleComponent);
