import * as React from 'react';
import {
  ComponentEnhancer,
  compose,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import { Icon } from '../../../icon/Icon';
import { Clickable } from '../../../interaction';
import { Indent, Row, Spacing } from '../../../layout';
import { applyDefaultDates, CalendarProps } from '../components/Calendar';

export type __C35123518 = ComponentEnhancer<{}, {}>;

interface StateProps {
  startMonth: number;
  setStartMonth: (startMonth: number) => void;
}

interface HandlerProps {
  nextMonth: () => void;
  prevMonth: () => void;
}

type InnerProps = CalendarProps<{}> & StateProps & HandlerProps;

const withSwitchButtons = (
  WrappedComponent: React.StatelessComponent<InnerProps>,
): React.StatelessComponent<InnerProps> => (props: InnerProps) => (
  <div>
    <Row justifyContent={'center'}>
      <Clickable onClick={props.prevMonth}>
        <Spacing>
          <Indent>
            <Icon name={'chevron-up'} />
          </Indent>
        </Spacing>
      </Clickable>
    </Row>
    <Row justifyContent={'center'}>
      <WrappedComponent {...props} />
    </Row>
    <Row justifyContent={'center'}>
      <Clickable onClick={props.nextMonth}>
        <Spacing>
          <Indent>
            <Icon name={'chevron-down'} />
          </Indent>
        </Spacing>
      </Clickable>
    </Row>
  </div>
);

const withClickHandlers = withHandlers({
  nextMonth: ({
    setStartMonth,
    startMonth,
    monthsPerRow,
  }: StateProps & CalendarProps<{}>) => () => {
    setStartMonth(startMonth + (monthsPerRow || 1));
  },
  prevMonth: ({
    setStartMonth,
    startMonth,
    monthsPerRow,
  }: StateProps & CalendarProps<{}>) => () => {
    setStartMonth(startMonth - (monthsPerRow || 1));
  },
});

const withSelectedMonthState = withState(
  'startMonth',
  'setStartMonth',
  ({ month }) => month,
);

const withMonthProp = withProps(({ startMonth }: StateProps) => ({
  month: startMonth,
}));

export const withMonthSwitcher = compose(
  applyDefaultDates(),
  withSelectedMonthState,
  withClickHandlers,
  withMonthProp,
  withSwitchButtons,
);
