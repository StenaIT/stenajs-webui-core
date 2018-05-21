import * as React from 'react';
import {
  ChangeEvent,
  ChangeEventHandler,
  CSSProperties,
  KeyboardEventHandler,
} from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers/WithTheme';

// tslint:disable:no-any

export type MoveDirection = 'right' | 'left' | 'down' | 'up' | 'stay';

export interface SimpleTextInputProps {
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
  onDone?: (value: string) => void;
  onEsc?: () => void;
  onEnter?: () => void;
  width?: string;
  height?: string;
  focusOnMount?: boolean;
  selectAllOnMount?: boolean;
  moveCursorToEndOnMount?: boolean;
  fontSize?: string;
  maxLength?: number;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onMove?: (direction: MoveDirection) => void;
}

export interface SimpleTextInputState {
  wasCancelled: boolean;
}

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
    } else if (onMove) {
      if (e.shiftKey && key === 'Tab') {
        onMove('left');
        e.preventDefault();
        e.stopPropagation();
      } else if (key === 'Tab') {
        onMove('right');
        e.preventDefault();
        e.stopPropagation();
      } else if (key === 'ArrowUp') {
        onMove('up');
        e.preventDefault();
        e.stopPropagation();
      } else if (key === 'ArrowDown') {
        onMove('down');
        e.preventDefault();
        e.stopPropagation();
      } else if (onEsc && key === 'Escape') {
        this.setState(() => ({ wasCancelled: true }));
        setTimeout(onEsc, 10);
        e.preventDefault();
        e.stopPropagation();
      } else if (key === 'ArrowRight') {
        if (
          this.textInput.value.length === this.textInput.selectionStart &&
          this.textInput.selectionStart === this.textInput.selectionStart
        ) {
          onMove('right');
          e.preventDefault();
          e.stopPropagation();
        }
      } else if (key === 'ArrowLeft') {
        if (
          this.textInput.selectionStart === 0 &&
          this.textInput.selectionStart === this.textInput.selectionStart
        ) {
          onMove('left');
          e.preventDefault();
          e.stopPropagation();
        }
      }
    } else if (onKeyDown) {
      onKeyDown(e);
    }
  };

  onBlur = (e: ChangeEvent<any>) => {
    const { onDone } = this.props;
    const { value } = e.target;
    const { wasCancelled } = this.state;
    if (onDone && !wasCancelled) {
      onDone(value || '');
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
    } = this.props;

    return (
      <input
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
        ref={input => (this.textInput = input)}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        onBlur={this.onBlur}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
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
