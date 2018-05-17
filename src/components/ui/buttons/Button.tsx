import glamorous from 'glamorous';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from '../layout/Row';
import { IconProp } from '@fortawesome/fontawesome';
import { Background } from '../colors/Background';
import { Space } from '../layout/Space';
import { Clickable } from '../interaction/Clickable';
import { GetTheme } from '../../theme/GetTheme';
import { ProgressIndicator } from '../progress/ProgressIndicator';
import { Border } from '../decorations/Border';

export interface ButtonProps {
  color?: string;
  disabledColor?: string;
  textColor?: string;
  label?: string;
  left?: React.ReactElement<{}>;
  right?: React.ReactElement<{}>;
  leftIcon?: IconProp;
  rightIcon?: IconProp;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
  iconSize?: number;
  borderRadius?: string;
  loading?: boolean;
  success?: boolean;
}

export interface ButtonTextProps {
  color: string;
  fontFamily: string;
  fontSize: string;
}

const ButtonText = glamorous.span(
  {
    fontWeight: 100,
  },
  ({ color, fontFamily, fontSize }: ButtonTextProps) => ({
    fontSize,
    color,
    fontFamily,
    letterSpacing: '1px',
  }),
);

export class Button extends React.PureComponent<ButtonProps> {
  renderButton() {
    const {
      color,
      disabledColor,
      textColor,
      label,
      left,
      right,
      leftIcon,
      rightIcon,
      width,
      height,
      disabled = false,
      loading = false,
      success = false,
      iconSize = 14,
      borderRadius,
    } = this.props;
    return (
      <GetTheme>
        {theme => (
          <Border
            width={0}
            borderRadius={borderRadius || theme.components.Button.borderRadius}
            overflow={'hidden'}
          >
            <Background
              color={
                loading || success
                  ? 'transparent'
                  : disabled
                    ? disabledColor || theme.components.Button.bgColorDisabled
                    : color || theme.components.Button.bgColor
              }
              height={height}
            >
              <Row
                width={width}
                height={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Space />
                {!loading && !success && (leftIcon || left) ? (
                  <>
                    {leftIcon ? (
                      <FontAwesomeIcon
                        icon={leftIcon}
                        color={textColor || theme.components.Button.textColor}
                        style={{ fontSize: iconSize }}
                      />
                    ) : (
                      undefined
                    )}
                    {left || undefined}
                    {label && <Space num={2} />}
                  </>
                ) : (
                  undefined
                )}
                {!loading && !success && label ? (
                  <ButtonText
                    color={textColor || theme.components.Button.textColor}
                    fontSize={theme.fontSizes.normal}
                    fontFamily={theme.fonts.buttons}
                  >
                    {label}
                  </ButtonText>
                ) : (
                  undefined
                )}

                {loading && <ProgressIndicator small />}
                {success && (
                  <FontAwesomeIcon
                    icon={'check'}
                    color={theme.colors.successGreen}
                    style={{ fontSize: 20 }}
                  />
                )}

                {!loading && !success && (rightIcon || right) ? (
                  <>
                    {label && <Space num={2} />}
                    {right}
                    {rightIcon ? (
                      <FontAwesomeIcon
                        icon={rightIcon}
                        color={textColor || theme.components.Button.textColor}
                        style={{ fontSize: iconSize }}
                      />
                    ) : (
                      undefined
                    )}
                  </>
                ) : (
                  undefined
                )}
                <Space />
              </Row>
            </Background>
          </Border>
        )}
      </GetTheme>
    );
  }

  render() {
    const { disabled, onClick } = this.props;

    if (disabled) {
      return <div style={{ display: 'table' }}>{this.renderButton()}</div>;
    }

    return (
      <Clickable onClick={onClick} opacityOnHover>
        {this.renderButton()}
      </Clickable>
    );
  }
}
