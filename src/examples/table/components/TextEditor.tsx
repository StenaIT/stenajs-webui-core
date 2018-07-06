import * as React from 'react';
import { compose, withState } from 'recompose';
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

export type InnerProps = TextEditorProps & TextStateProps;

const TextEditorComponent = ({
  setText,
  text,
  value,
  enteredText,
  ...simpleTextInputProps
}: InnerProps) => (
  <SimpleTextInput
    value={text}
    onChange={setText}
    {...simpleTextInputProps}
    style={{ width: '100%', height: '100%' }}
  />
);

const textState = withState(
  'text',
  'setText',
  ({ enteredText, value }: TextEditorProps) => enteredText || '',
);

export const TextEditor = compose<InnerProps, TextEditorProps>(textState)(
  TextEditorComponent,
);
