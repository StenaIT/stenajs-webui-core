import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  withOnToggleHandler,
  WithOnToggleHandler,
} from '../../../util/enhancers/withOnToggleHandler';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers/WithComponentTheme';
import { Clickable } from '../../interaction/Clickable';
import { Row } from '../../layout/Row';
import { Space } from '../../layout/Space';
import { DefaultText } from '../../text/DefaultText';
import { SimpleCheckbox, SimpleCheckboxProps } from './SimpleCheckbox';
import { SimpleCheckboxTheme } from './SimpleCheckboxTheme';

export interface CheckboxWithLabelProps extends SimpleCheckboxProps {
  label?: string;
  textColor?: string;
  disabled?: boolean;
}

type InnerProps = CheckboxWithLabelProps &
  WithInnerComponentThemeProps<SimpleCheckboxTheme> &
  WithOnToggleHandler;

export const CheckboxWithLabelComponent: React.SFC<InnerProps> = props => {
  const {
    children,
    label,
    textColor,
    disabled,
    theme,
    onToggle,
    onChange, // Do not pass to SimpleCheckbox
    ...propsToCheckbox
  } = props;
  return (
    <Clickable onClick={disabled ? undefined : onToggle}>
      <Row alignItems={'center'}>
        <SimpleCheckbox {...propsToCheckbox} disabled={disabled} />
        <Space />
        {label && (
          <DefaultText
            color={disabled ? theme.disabledColors.iconColor : textColor}
          >
            {label}
          </DefaultText>
        )}
        {children}
      </Row>
    </Clickable>
  );
};

export const CheckboxWithLabel = setDisplayName<CheckboxWithLabelProps>(
  'CheckboxWithLabel',
)(
  compose<InnerProps, CheckboxWithLabelProps>(
    withComponentTheme('SimpleCheckbox'),
    withOnToggleHandler,
  )(CheckboxWithLabelComponent),
);
