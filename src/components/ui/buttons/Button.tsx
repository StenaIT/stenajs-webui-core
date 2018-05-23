import { IconProp } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'react-emotion';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';
import { Background } from '../colors/Background';
import { Border } from '../decorations/Border';
import { Clickable } from '../interaction/Clickable';
import { Row } from '../layout/Row';
import { Space } from '../layout/Space';
import { ProgressIndicator } from '../progress/ProgressIndicator';

export interface ButtonProps {
  /** The color of the button. */
  color?: string;
  /** The color of the button when disabled. */
  disabledColor?: string;
  /** The color of the text on the button. */
  textColor?: string;
  /** The text on the button. */
  label?: string;
  /** React element to place to the left of the text. */
  left?: React.ReactElement<{}>;
  /** React element to place to the right of the text. */
  right?: React.ReactElement<{}>;
  /** FontAwesome icon to place to the left of the text. */
  leftIcon?: IconProp;
  /** FontAwesome icon to place to the right of the text. */
  rightIcon?: IconProp;
  /** The width of the button */
  width?: string;
  /** The height of the button */
  height?: string;
  /** onClick callback, called when button is clicked. */
  onClick?: () => void;
  /** Disables the button. Changes to disabled color and clicks are disabled. */
  disabled?: boolean;
  /** The size of the icons */
  iconSize?: number;
  /** Border radius of the button. */
  borderRadius?: string;
  /** Render loading spinner instead of button. */
  loading?: boolean;
  /** Render success check icon instead of button. */
  success?: boolean;
}

export interface ButtonTextProps {
  color: string;
  fontFamily: string;
  fontSize: string;
}

const ButtonText = styled<ButtonTextProps, 'span'>('span')(
  ({ color, fontFamily, fontSize }) => ({
    fontWeight: 100,
    fontSize,
    color,
    fontFamily,
    letterSpacing: '1px',
  }),
);

class ButtonComponent extends React.PureComponent<
  ButtonProps & WithThemeProps
> {
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
      theme,
    } = this.props;
    return (
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

export const Button = compose<ButtonProps & WithThemeProps, ButtonProps>(
  withTheme,
)(ButtonComponent);
