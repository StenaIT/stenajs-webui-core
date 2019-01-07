import { IconProp } from '@fortawesome/fontawesome';
import { css } from 'emotion';
import * as React from 'react';
import { ComponentClass, ReactNode } from 'react';
import {
  compose,
  setDisplayName,
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
} from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers';
import { Background } from '../../colors';
import { Border } from '../../decorations';
import { Icon } from '../../icon';
import { Row, Space } from '../../layout';
import { DefaultTextInputTheme } from './DefaultTextInputTheme';
import { SimpleTextInput, SimpleTextInputProps } from './SimpleTextInput';

export type __C_DEFAULT_TEXT_INPUT_12491142 = ComponentClass<{}>;

// TODO Move to theme.

const borderClass = css`
  display: inline-block;
  overflow: hidden;
`;

const inputClass = css`
  border: 0;
  :focus {
    outline: 0;
  }
`;

export interface DefaultTextInputProps
  extends SimpleTextInputProps,
    ComponentThemeProps<'DefaultTextInput'> {
  /** React node to put to the left. Left icon is ignored if this is set. */
  contentLeft?: ReactNode;
  /** React node to put to the right. Right icon is ignored if this is set. */
  contentRight?: ReactNode;
  /** If true, there will be no padding between contentLeft/contentRight and the border. */
  disableContentPadding?: boolean;
  /** If true, there will be no padding between contentLeft and the border. */
  disableContentPaddingLeft?: boolean;
  /** If true, there will be no padding between contentRight and the border. */
  disableContentPaddingRight?: boolean;
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
  /** Force focus highlight. */
  forceFocusHighlight?: boolean;
}

type InnerProps = DefaultTextInputProps &
  WithInnerComponentThemeProps<DefaultTextInputTheme> &
  FocusStateProps &
  FocusHandlers;

interface TextInputIconProps {
  content?: React.ReactNode;
  icon?: IconProp;
  iconSize?: number;
  iconColor?: string;
  theme: DefaultTextInputTheme;
  spaceOnRight?: boolean;
  spaceOnLeft?: boolean;
  disableContentPadding?: boolean;
  disableContentPaddingLeft?: boolean;
  disableContentPaddingRight?: boolean;
}

const TextInputIcon = ({
  icon,
  content,
  iconColor,
  iconSize,
  theme,
  spaceOnLeft,
  spaceOnRight,
  disableContentPadding,
  disableContentPaddingLeft,
  disableContentPaddingRight,
}: TextInputIconProps) => {
  if (!content && !icon) {
    return null;
  }

  if (content) {
    return (
      <>
        {spaceOnLeft &&
          !(disableContentPadding || disableContentPaddingLeft) && <Space />}
        {content}
        {spaceOnRight &&
          !(disableContentPadding || disableContentPaddingRight) && <Space />}
      </>
    );
  }

  return (
    <>
      {spaceOnLeft && <Space />}
      {icon && (
        <Icon name={icon} size={iconSize || theme.iconSize} color={iconColor} />
      )}
      {spaceOnRight && <Space />}
    </>
  );
};

const DefaultTextInputComponent = ({
  textColor,
  focused,
  contentLeft,
  contentRight,
  iconLeft,
  iconRight,
  iconColorLeft,
  iconColorRight,
  iconSizeLeft,
  iconSizeRight,
  backgroundColor,
  forceFocusHighlight,
  disableContentPadding = false,
  disableContentPaddingLeft = false,
  disableContentPaddingRight = false,
  theme,
  disabled,
  ...inputProps
}: InnerProps) => (
  <Border
    className={borderClass}
    borderRadius={theme.borderRadius}
    color={
      forceFocusHighlight || focused
        ? theme.borderColorFocused
        : theme.borderColor
    }
    borderStyle={theme.borderStyle}
    width={theme.borderWidth}
  >
    <Background
      color={
        disabled
          ? theme.disabledBackgroundColor
          : backgroundColor || theme.backgroundColor
      }
    >
      <Row alignItems={'center'}>
        <TextInputIcon
          content={contentLeft}
          icon={iconLeft}
          iconSize={iconSizeLeft}
          theme={theme}
          iconColor={iconColorLeft}
          spaceOnLeft
          disableContentPadding={disableContentPadding}
          disableContentPaddingLeft={disableContentPaddingLeft}
          disableContentPaddingRight={disableContentPaddingRight}
        />
        <SimpleTextInput
          {...inputProps}
          disabled={disabled}
          textColor={textColor || theme.textColor}
          backgroundColor={backgroundColor || theme.backgroundColor}
          style={{
            fontSize: theme.fontSize,
            height: theme.height,
            paddingLeft: theme.paddingLeft,
            paddingRight: theme.paddingRight,
          }}
          className={inputClass}
        />
        <TextInputIcon
          content={contentRight}
          icon={iconRight}
          iconSize={iconSizeRight}
          theme={theme}
          iconColor={iconColorRight}
          spaceOnRight
          disableContentPadding={disableContentPadding}
          disableContentPaddingLeft={disableContentPaddingLeft}
          disableContentPaddingRight={disableContentPaddingRight}
        />
      </Row>
    </Background>
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

export const DefaultTextInput = setDisplayName<DefaultTextInputProps>(
  'DefaultTextInput',
)(
  compose<InnerProps, DefaultTextInputProps>(
    withComponentTheme('DefaultTextInput'),
    withFocusState,
    withFocusState,
  )(DefaultTextInputComponent),
);
