import * as React from 'react';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import {
  SimpleTextInput,
  SimpleTextInputProps,
} from '../../../components/ui/form/text-input';

export interface TextEditorProps extends SimpleTextInputProps {
  enteredText: string;
}

export interface TextStateProps {
  text: string;
  setText: (text: string) => void;
}

export type InnerProps = TextEditorProps &
  TextStateProps &
  TriggerOnChangeWhenSetText;

const TextEditorComponent = ({
  setTextAndOnChange,
  text,
  value,
  enteredText,
  ...simpleTextInputProps
}: InnerProps) => (
  <SimpleTextInput
    {...simpleTextInputProps}
    value={text}
    onChange={setTextAndOnChange}
    style={{ width: '100%', height: '100%' }}
  />
);

const textState = withState(
  'text',
  'setText',
  ({ enteredText, value }: TextEditorProps) => enteredText || value || '',
);

const triggerOnChangeWhenEnteredText = lifecycle<TextEditorProps, {}>({
  componentDidMount() {
    const { onChange, enteredText } = this.props;
    if (enteredText && onChange) {
      onChange(enteredText);
    }
  },
});

export interface TriggerOnChangeWhenSetText {
  setTextAndOnChange: (value: string) => void;
}

const triggerOnChangeWhenSetText = withHandlers<
  InnerProps,
  TriggerOnChangeWhenSetText
>({
  setTextAndOnChange: ({ onChange, setText }) => (value: string) => {
    setText(value);
    if (onChange) {
      onChange(value);
    }
  },
});
export const TextEditor = compose<InnerProps, TextEditorProps>(
  triggerOnChangeWhenEnteredText,
  textState,
  triggerOnChangeWhenSetText,
)(TextEditorComponent);
