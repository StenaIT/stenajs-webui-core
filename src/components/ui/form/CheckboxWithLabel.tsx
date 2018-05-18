import * as React from 'react';
import { Row } from '../layout/Row';
import { Space } from '../layout/Space';
import { DefaultText } from '../text/DefaultText';
import { SimpleCheckbox, SimpleCheckboxProps } from './SimpleCheckbox';
import { Clickable } from '../interaction/Clickable';
import { GetTheme } from '../../theme/GetTheme';

export interface CheckboxWithLabelProps extends SimpleCheckboxProps {
  label?: string;
  textColor?: string;
  disabled?: boolean;
}

export class CheckboxWithLabel extends React.Component<CheckboxWithLabelProps> {
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
      onChange, // Do not pass to SimpleCheckbox
      ...propsToCheckbox
    } = this.props;
    return (
      <GetTheme>
        {theme => (
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
        )}
      </GetTheme>
    );
  }
}
