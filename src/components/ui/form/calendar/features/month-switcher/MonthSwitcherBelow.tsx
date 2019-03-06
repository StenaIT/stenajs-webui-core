import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import * as React from 'react';
import { ComponentEnhancer, compose } from 'recompose';
import { addIcons } from '../../../../../icon-library/IconLibrary';
import { StandardButton } from '../../../../buttons/StandardButton';
import { Indent, Row, Space } from '../../../../layout/index';
import { CalendarProps } from '../../components/Calendar';
import {
  MonthSwitcherHandlerProps,
  MonthSwitcherStateProps,
  withMonthSwitcherLogic,
} from './MonthSwitcherLogic';

addIcons(faChevronDown, faChevronUp);

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
