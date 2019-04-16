import styled from '@emotion/styled';
import * as React from 'react';
import {
  ChangeEvent,
  ChangeEventHandler,
  CSSProperties,
  KeyboardEvent,
  KeyboardEventHandler,
} from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers/WithTheme';

// tslint:disable:no-any

type MoveDirection = 'right' | 'left' | 'down' | 'up';

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
  /** Type of input */
  inputType?: string;
  fontSize?: string;
  maxLength?: number;
  size?: number;
  min?: number;
  max?: number;
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

const StyledInput = styled('input')<
  Pick<
    SimpleTextInputProps,
    | 'backgroundColor'
    | 'fontSize'
    | 'height'
    | 'placeholderColor'
    | 'textColor'
    | 'width'
  > &
    Pick<WithThemeProps, 'theme'> & { outerStyle?: CSSProperties }
>(
  ({
    backgroundColor,
    fontSize,
    height,
    outerStyle,
    placeholderColor,
    textColor,
    theme,
    width,
  }) => ({
    '&::placeholder': {
      color:
        placeholderColor || theme.components.SimpleTextInput.placeholderColor,
    },
    '&::-webkit-outer-spin-button': {
      webkitAppearance: 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      webkitAppearance: 'none',
      margin: 0,
    },
    backgroundColor:
      backgroundColor || theme.components.SimpleTextInput.backgroundColor,
    color: textColor || theme.components.SimpleTextInput.textColor,
    '&:disabled': {
      backgroundColor: `${
        theme.components.SimpleTextInput.disabledBackgroundColor
      }`,
      color: `${theme.components.SimpleTextInput.disabledTextColor}`,
    },
    height: height || theme.components.SimpleTextInput.height,
    mozAppearance: 'textfield',
    width: width || '100%',
    fontSize: fontSize || theme.components.SimpleTextInput.fontSize,
    fontFamily: theme.components.SimpleTextInput.fontFamily,
    ...outerStyle,
  }),
);

class SimpleTextInputComponent extends React.Component<
  SimpleTextInputProps & WithThemeProps,
  SimpleTextInputState
> {
  state = {
    wasCancelled: false,
  };

  private textInput = React.createRef<HTMLInputElement>();

  componentDidMount() {
    const { selectAllOnMount, moveCursorToEndOnMount } = this.props;
    if (selectAllOnMount) {
      this.textInput.current!.setSelectionRange(
        0,
        this.textInput.current!.value.length,
      );
    } else if (moveCursorToEndOnMount) {
      this.textInput.current!.setSelectionRange(
        this.textInput.current!.value.length,
        this.textInput.current!.value.length,
      );
    }
  }

  componentWillReceiveProps(nextProps: SimpleTextInputProps) {
    const { value: nextValue } = nextProps;
    const { value: prevValue } = this.props;
    if (nextValue && nextValue !== prevValue) {
      this.textInput.current!.value = nextValue;
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
      this.textInput.current!.blur();
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
          this.textInput.current!.value.length ===
            this.textInput.current!.selectionStart &&
          this.textInput.current!.selectionStart ===
            this.textInput.current!.selectionStart
        ) {
          this.blurMoveAndCancel('right', e);
        }
      } else if (key === 'ArrowLeft') {
        if (
          this.textInput.current!.selectionStart === 0 &&
          this.textInput.current!.selectionStart ===
            this.textInput.current!.selectionStart
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
    this.textInput.current!.blur();
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
      focusOnMount,
      selectAllOnMount,
      inputType = 'text',
      min,
      max,
    } = this.props;

    return (
      <StyledInput
        theme={theme}
        placeholderColor={placeholderColor}
        backgroundColor={backgroundColor}
        textColor={textColor}
        width={width}
        height={height}
        fontSize={fontSize}
        outerStyle={style}
        className={className}
        type={inputType}
        ref={this.textInput}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={onFocus}
        autoFocus={focusOnMount || selectAllOnMount}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
        min={min}
        max={max}
      />
    );
  }
}

export const SimpleTextInput = compose<
  SimpleTextInputProps & WithThemeProps,
  SimpleTextInputProps
>(withTheme)(SimpleTextInputComponent);
