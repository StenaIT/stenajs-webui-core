import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { compose } from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { Clickable } from '../interaction/Clickable';
import { Space } from '../layout/Space';
import { ProgressIndicator } from '../progress/ProgressIndicator';
import { ButtonTheme } from './ButtonTheme';

export type ButtonPropsWithTheme = ButtonProps & ComponentThemeProps<'Button'>;

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

export interface ButtonTextProps extends ComponentThemeProps<'Button'> {
  color: string;
  fontFamily: string;
  fontSize: string;
}

const ButtonText = styled('span')<ButtonTextProps>(
  {
    fontWeight: 600,
    letterSpacing: '1px',
  },
  ({ color, fontFamily, fontSize }) => ({
    fontSize,
    color,
    fontFamily,
  }),
);

type InnerProps = ButtonProps & WithInnerComponentThemeProps<ButtonTheme>;

const StyledButton = styled.button<{
  backgroundColor: string;
  borderRadius: string;
  disabled: boolean;
  height: string;
  width: string;
}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};

  border: 1px solid ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;

  padding: 0;
  font: inherit;
  color: inherit;
  outline: none;

  :focus {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
  }
`;

class ButtonComponent extends React.PureComponent<InnerProps> {
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
      <StyledButton
        backgroundColor={
          loading || success
            ? 'transparent'
            : disabled
              ? disabledColor || theme.bgColorDisabled
              : color || theme.bgColor
        }
        borderRadius={borderRadius || theme.borderRadius || '0'}
        disabled={disabled}
        height={height || '100%'}
        width={width || '100%'}
      >
        <Space num={theme.numSpacing} />
        {!loading && !success && (leftIcon || left) ? (
          <>
            {leftIcon ? (
              <FontAwesomeIcon
                icon={leftIcon}
                color={textColor || theme.textColor}
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
            color={textColor || theme.textColor}
            fontSize={theme.fontSize}
            fontFamily={theme.font}
          >
            {label}
          </ButtonText>
        ) : (
          undefined
        )}

        {loading && <ProgressIndicator small />}
        {success && (
          <FontAwesomeIcon
            icon={faCheck}
            color={theme.successIconColor}
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
                color={textColor || theme.textColor}
                style={{ fontSize: iconSize }}
              />
            ) : (
              undefined
            )}
          </>
        ) : (
          undefined
        )}
        <Space num={theme.numSpacing} />
      </StyledButton>
    );
  }

  render() {
    const { disabled, onClick } = this.props;

    if (disabled) {
      return (
        <div style={{ display: 'inline-block' }}>{this.renderButton()}</div>
      );
    }

    return (
      <Clickable onClick={onClick} opacityOnHover>
        {this.renderButton()}
      </Clickable>
    );
  }
}

export const Button = compose<InnerProps, ButtonPropsWithTheme>(
  withComponentTheme('Button'),
)(ButtonComponent);
