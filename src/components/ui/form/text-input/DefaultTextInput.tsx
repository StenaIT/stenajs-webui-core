import { IconProp } from '@fortawesome/fontawesome';
import { css } from 'emotion';
import * as React from 'react';
import { ComponentClass, ReactNode } from 'react';
import {
  compose,
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
} from 'recompose';
import { Theme } from '../../../../themes';
import { withTheme } from '../../../util/enhancers';
import { WithThemeProps } from '../../../util/enhancers/WithTheme';
import { Border, BorderStyle } from '../../decorations';
import { Icon } from '../../icon';
import { Indent, Row } from '../../layout';
import { SimpleTextInput, SimpleTextInputProps } from './SimpleTextInput';

export type __C_DEFAULT_TEXT_INPUT_12491142 = ComponentClass<{}>;

// TODO Move to theme.

const borderClass = css`
  display: table;
  overflow: hidden;
`;

const inputClass = css`
  border: 0;
  :focus {
    outline: 0;
  }
`;

export interface DefaultTextInputProps extends SimpleTextInputProps {
  /** The border style of the border. Ex: '1px solid black' */
  border?: string;
  /** The border-style of the border. Ex: 'solid' */
  borderStyle?: BorderStyle;
  /** The width of the border. */
  borderWidth?: number;
  /** The color of the border. */
  borderColor?: string;
  /** The radius size of the border. */
  borderRadius?: string;
  /** React node to put to the left. Left icon is ignored if this is set. */
  contentLeft?: ReactNode;
  /** React node to put to the right. Right icon is ignored if this is set. */
  contentRight?: ReactNode;
  /** Icon on the left side. */
  iconLeft?: IconProp;
  /** Icon on the right side. */
  iconRight?: IconProp;
  /** Color of the icon on the left side. */
  iconColorLeft?: string;
  /** Color of the icon on the right side. */
  iconColorRight?: string;
  /** Size of the icon on the left side. */
  iconSizeLeft?: number;
  /** Size of the icon on the right side. */
  iconSizeRight?: number;
}

type InnerProps = DefaultTextInputProps &
  WithThemeProps &
  FocusStateProps &
  FocusHandlers;

interface TextInputIconProps {
  content?: React.ReactNode;
  icon?: IconProp;
  iconSize?: number;
  iconColor?: string;
  theme: Theme;
}

const TextInputIcon = ({
  icon,
  content,
  iconColor,
  iconSize,
  theme,
}: TextInputIconProps) => {
  if (!content && !icon) {
    return null;
  }
  return (
    <Indent>
      {content}
      {!content &&
        icon && (
          <Icon
            name={icon}
            size={iconSize || theme.components.DefaultTextInput.iconSize}
            color={iconColor}
          />
        )}
    </Indent>
  );
};

const DefaultTextInputComponent = ({
  borderRadius,
  borderStyle,
  borderColor,
  borderWidth,
  theme,
  focused,
  contentLeft,
  contentRight,
  iconLeft,
  iconRight,
  iconColorLeft,
  iconColorRight,
  iconSizeLeft,
  iconSizeRight,
  ...inputProps
}: InnerProps) => (
  <Border
    className={borderClass}
    borderRadius={
      borderRadius || theme.components.DefaultTextInput.borderRadius
    }
    color={
      borderColor ||
      (focused
        ? theme.components.DefaultTextInput.borderColorFocused
        : theme.components.DefaultTextInput.borderColor)
    }
    borderStyle={borderStyle || theme.components.DefaultTextInput.borderStyle}
    width={borderWidth || theme.components.DefaultTextInput.borderWidth}
  >
    <Row alignItems={'center'}>
      <TextInputIcon
        content={contentLeft}
        icon={iconLeft}
        iconSize={iconSizeLeft}
        theme={theme}
        iconColor={iconColorLeft}
      />
      <SimpleTextInput
        {...inputProps}
        style={{
          fontSize: theme.components.DefaultTextInput.fontSize,
          height: theme.components.DefaultTextInput.height,
          paddingLeft: theme.components.DefaultTextInput.paddingLeft,
          paddingRight: theme.components.DefaultTextInput.paddingRight,
        }}
        className={inputClass}
      />
      <TextInputIcon
        content={contentRight}
        icon={iconRight}
        iconSize={iconSizeRight}
        theme={theme}
        iconColor={iconColorRight}
      />
    </Row>
  </Border>
);

interface FocusStateProps {
  focused: boolean;
}

type FocusHandlers = StateHandlerMap<FocusStateProps> & {
  onFocus(): StateHandler<FocusStateProps>;
  onBlur(): StateHandler<FocusStateProps>;
};

const withFocusState = withStateHandlers<
  FocusStateProps,
  FocusHandlers,
  DefaultTextInputProps
>(
  { focused: false },
  {
    onBlur: ({}, { onBlur }) => () => {
      if (onBlur) {
        onBlur();
      }
      return {
        focused: false,
      };
    },
    onFocus: ({}, { onFocus }) => () => {
      if (onFocus) {
        onFocus();
      }
      return {
        focused: true,
      };
    },
  },
);

export const DefaultTextInput = compose<InnerProps, DefaultTextInputProps>(
  withTheme,
  withFocusState,
  withFocusState,
)(DefaultTextInputComponent);
