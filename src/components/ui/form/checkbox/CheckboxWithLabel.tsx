import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithComponentThemeProps,
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
  WithComponentThemeProps<SimpleCheckboxTheme>;

class CheckboxWithLabelComponent extends React.Component<InnerProps> {
  onChange = () => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(!value);
    }
  };

  render() {
    const {
      children,
      label,
      textColor,
      disabled,
      theme,
      onChange, // Do not pass to SimpleCheckbox
      ...propsToCheckbox
    } = this.props;
    return (
      <Clickable onClick={disabled ? undefined : this.onChange}>
        <Row alignItems={'center'}>
          <SimpleCheckbox {...propsToCheckbox} disabled={disabled} />
          <Space />
          {label && (
            <DefaultText color={disabled ? theme.iconColorDisabled : textColor}>
              {label}
            </DefaultText>
          )}
          {children}
        </Row>
      </Clickable>
    );
  }
}

export const CheckboxWithLabel = setDisplayName<CheckboxWithLabelProps>(
  'CheckboxWithLabel',
)(
  compose<InnerProps, CheckboxWithLabelProps>(
    withComponentTheme('SimpleCheckbox'),
  )(CheckboxWithLabelComponent),
);
