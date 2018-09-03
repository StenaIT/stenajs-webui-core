import * as React from 'react';
import {
  ChangeEvent,
  ChangeEventHandler,
  ComponentClass,
  CSSProperties,
  HTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
} from 'react';
import styled from 'react-emotion';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers/WithTheme';

// tslint:disable:no-any

export type MoveDirection = 'right' | 'left' | 'down' | 'up';

export interface SimpleTextInputProps {
  /** The current value shown in the text input. */
  value?: string;
  /** CSS class name applied to the input element. */
  className?: string;
  /** onChange callback, called when user triggers a value change in the field. */
  onChange?: (value: string) => void;
  /** onDone callback, triggered by blur, if the blur was not triggered by esc key. */
  onDone?: (value: string) => void;
  /** onEsc callback, called user presses the escape key. */
  onEsc?: () => void;
  /** onEnter callback, called user presses the enter key. This triggers a blur. */
  onEnter?: () => void;
  /** Width of the input element. */
  width?: string;
  /** Height of the input element. */
  height?: string;
  /** If true, field will focus automatically when mounted in DOM. */
  focusOnMount?: boolean;
  /** If true, all text in the input field will be selected on mount. */
  selectAllOnMount?: boolean;
  /** If true, cursor will move to the end of the entered text on mount. */
  moveCursorToEndOnMount?: boolean;
  fontSize?: string;
  maxLength?: number;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  placeholder?: string;
  placeholderColor?: string;
  style?: CSSProperties;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  /** onMove callback, triggered when user tries to move outside of field using arrow keys, tab or shift+tab. */
  onMove?: (direction: MoveDirection) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface SimpleTextInputState {
  wasCancelled: boolean;
}

interface WithPlaceholderColor {
  placeholderColor: string;
}

type DivElement = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const StyledInput: ComponentClass<
  HTMLAttributes<HTMLInputElement> & WithPlaceholderColor & DivElement
> = styled<WithPlaceholderColor, 'input'>('input')`
  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;

class SimpleTextInputComponent extends React.Component<
  SimpleTextInputProps & WithThemeProps,
  SimpleTextInputState
> {
  textInput: any;

  state = {
    wasCancelled: false,
  };

  componentDidMount() {
    const {
      focusOnMount,
      selectAllOnMount,
      moveCursorToEndOnMount,
    } = this.props;
    if (focusOnMount) {
      this.textInput.focus();
    }
    if (selectAllOnMount) {
      this.textInput.setSelectionRange(0, this.textInput.value.length);
    } else if (moveCursorToEndOnMount) {
      this.textInput.setSelectionRange(
        this.textInput.value.length,
        this.textInput.value.length,
      );
    }
  }

  componentWillReceiveProps(nextProps: SimpleTextInputProps) {
    const { value: nextValue } = nextProps;
    const { value: prevValue } = this.props;
    if (nextValue && nextValue !== prevValue) {
      this.textInput.value = nextValue;
    }
  }

  onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { onChange } = this.props;
    const { value } = target;
    if (onChange) {
      onChange(value || '');
    }
  };

  onKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    const { onEsc, onEnter, onKeyDown, onMove } = this.props;
    const { key } = e;
    if (key === 'Enter') {
      this.textInput.blur();
      if (onEnter) {
        onEnter();
      }
    } else if (onEsc && key === 'Escape') {
      this.setState(() => ({ wasCancelled: true }), onEsc);
      e.preventDefault();
      e.stopPropagation();
    } else if (onMove) {
      if (e.shiftKey && key === 'Tab') {
        this.blurMoveAndCancel('left', e);
      } else if (key === 'Tab') {
        this.blurMoveAndCancel('right', e);
      } else if (key === 'ArrowUp') {
        this.blurMoveAndCancel('up', e);
      } else if (key === 'ArrowDown') {
        this.blurMoveAndCancel('down', e);
      } else if (key === 'ArrowRight') {
        if (
          this.textInput.value.length === this.textInput.selectionStart &&
          this.textInput.selectionStart === this.textInput.selectionStart
        ) {
          this.blurMoveAndCancel('right', e);
        }
      } else if (key === 'ArrowLeft') {
        if (
          this.textInput.selectionStart === 0 &&
          this.textInput.selectionStart === this.textInput.selectionStart
        ) {
          this.blurMoveAndCancel('left', e);
        }
      }
    } else if (onKeyDown) {
      onKeyDown(e);
    }
  };

  blurMoveAndCancel = (
    direction: MoveDirection,
    e: KeyboardEvent<HTMLInputElement>,
  ) => {
    const { onMove } = this.props;
    this.textInput.blur();
    if (onMove) {
      onMove(direction);
    }
    e.preventDefault();
    e.stopPropagation();
  };

  onBlur = (e: ChangeEvent<any>) => {
    const { onDone, onBlur } = this.props;
    const { value } = e.target;
    const { wasCancelled } = this.state;
    if (onDone && !wasCancelled) {
      onDone(value || '');
    }
    if (onBlur) {
      onBlur();
    }
  };

  render() {
    const {
      value = '',
      width,
      height,
      fontSize,
      maxLength,
      size,
      backgroundColor,
      textColor,
      placeholder,
      disabled = false,
      style,
      className,
      theme,
      onFocus,
      placeholderColor,
    } = this.props;

    return (
      <StyledInput
        style={{
          width,
          height: height || theme.components.SimpleTextInput.height,
          fontSize: fontSize || theme.components.SimpleTextInput.fontSize,
          backgroundColor:
            backgroundColor || theme.components.SimpleTextInput.backgroundColor,
          fontFamily: theme.components.SimpleTextInput.fontFamily,
          color: textColor || theme.components.SimpleTextInput.textColor,
          ...style,
        }}
        className={className}
        type="text"
        ref={(input: any) => (this.textInput = input)}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={onFocus}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderColor={
          placeholderColor || theme.components.SimpleTextInput.placeholderColor
        }
        size={size}
        disabled={disabled}
      />
    );
  }
}

export const SimpleTextInput = compose<
  SimpleTextInputProps & WithThemeProps,
  SimpleTextInputProps
>(withTheme)(SimpleTextInputComponent);
