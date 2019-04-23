import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
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

export type __C_DEFAULT_TEXT_INPUT_12491142 = React.ComponentClass<{}>;

// TODO Move to theme.

const StyledBorder = styled(Border)`
  display: inline-block;
  overflow: hidden;
`;

const StyledSimpleTextInput = styled(SimpleTextInput)`
  border: 0;
  :focus {
    outline: 0;
  }
`;

export interface DefaultTextInputProps
  extends SimpleTextInputProps,
    ComponentThemeProps<'DefaultTextInput'> {
  /** React node to put to the left. Left icon is ignored if this is set. */
  contentLeft?: React.ReactNode;
  /** React node to put to the right. Right icon is ignored if this is set. */
  contentRight?: React.ReactNode;
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
  <StyledBorder
    borderRadius={theme.borderRadius}
    color={
      forceFocusHighlight || focused
        ? theme.borderColorFocused
        : theme.borderColor
    }
    borderStyle={theme.borderStyle}
    width={theme.borderWidth}
    style={{ width: inputProps.width || '100%' }}
  >
    <Background
      color={
        disabled
          ? theme.disabledBackgroundColor
          : backgroundColor || theme.backgroundColor
      }
      style={{ width: inputProps.width || '100%' }}
    >
      <Row alignItems={'center'} style={{ width: inputProps.width || '100%' }}>
        <TextInputIcon
          content={contentLeft}
          disableContentPadding={disableContentPadding}
          disableContentPaddingLeft={disableContentPaddingLeft}
          disableContentPaddingRight={disableContentPaddingRight}
          icon={iconLeft}
          iconColor={iconColorLeft}
          iconSize={iconSizeLeft}
          spaceOnLeft
          theme={theme}
        />
        <div style={{ width: '100%' }}>
          <StyledSimpleTextInput
            {...inputProps}
            backgroundColor={backgroundColor || theme.backgroundColor}
            disabled={disabled}
            fontSize={theme.fontSize}
            height={theme.height}
            style={{
              paddingLeft: theme.paddingLeft,
              paddingRight: theme.paddingRight,
              boxSizing: 'border-box',
              ...inputProps.style,
            }}
            textColor={textColor || theme.textColor}
            width={'100%'}
          />
        </div>
        <TextInputIcon
          content={contentRight}
          disableContentPadding={disableContentPadding}
          disableContentPaddingLeft={disableContentPaddingLeft}
          disableContentPaddingRight={disableContentPaddingRight}
          icon={iconRight}
          iconColor={iconColorRight}
          iconSize={iconSizeRight}
          spaceOnRight
          theme={theme}
        />
      </Row>
    </Background>
  </StyledBorder>
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
