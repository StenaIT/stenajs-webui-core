import * as React from 'react';
import { ComponentEnhancer, compose } from 'recompose';
import { StandardButton } from '../../../../buttons/StandardButton';
import { Indent, Row, Space } from '../../../../layout/index';
import { CalendarProps } from '../../components/Calendar';
import {
  MonthSwitcherHandlerProps,
  MonthSwitcherStateProps,
  withMonthSwitcherLogic,
} from './MonthSwitcherLogic';

export type __C121235123518 = ComponentEnhancer<{}, {}>;

type InnerProps = CalendarProps<{}> &
  MonthSwitcherStateProps &
  MonthSwitcherHandlerProps;

const withSwitchButtons = (
  WrappedComponent: React.StatelessComponent<InnerProps>,
): React.StatelessComponent<InnerProps> => (props: InnerProps) => (
  <div>
    <WrappedComponent {...props} />
    <Indent>
      <Row>
        <StandardButton onClick={props.prevMonth} leftIcon={'chevron-up'} />
        <Space />
        <StandardButton onClick={props.nextMonth} leftIcon={'chevron-down'} />
      </Row>
    </Indent>
    <Space />
  </div>
);

export const withMonthSwitcherBelow = compose(
  withMonthSwitcherLogic,
  withSwitchButtons,
);
