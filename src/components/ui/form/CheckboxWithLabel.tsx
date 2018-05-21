import * as React from 'react';
import { Row } from '../layout/Row';
import { Space } from '../layout/Space';
import { DefaultText } from '../text/DefaultText';
import { SimpleCheckbox, SimpleCheckboxProps } from './SimpleCheckbox';
import { Clickable } from '../interaction/Clickable';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface CheckboxWithLabelProps extends SimpleCheckboxProps {
  label?: string;
  textColor?: string;
  disabled?: boolean;
}

class CheckboxWithLabelComponent extends React.Component<
  CheckboxWithLabelProps & WithThemeProps
> {
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
            <DefaultText
              color={
                disabled
                  ? theme.components.SimpleCheckbox.colorDisabled
                  : textColor
              }
            >
              {label}
            </DefaultText>
          )}
          {children}
        </Row>
      </Clickable>
    );
  }
}

export const CheckboxWithLabel = compose<
  CheckboxWithLabelProps & WithThemeProps,
  CheckboxWithLabelProps
>(withTheme)(CheckboxWithLabelComponent);
