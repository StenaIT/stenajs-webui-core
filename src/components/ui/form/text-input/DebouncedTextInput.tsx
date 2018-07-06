import * as React from 'react';
import { SimpleTextInput, SimpleTextInputProps } from './SimpleTextInput';
import { Debounce } from '../../../util/events/Debounce';

export interface DebouncedTextInputProps extends SimpleTextInputProps {
  debouncedOnChange?: (value: string) => void;
}

export class DebouncedTextInput extends React.Component<
  DebouncedTextInputProps
> {
  onChange = (value: string) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  debouncedOnChange = (value: string) => {
    const { debouncedOnChange } = this.props;
    if (debouncedOnChange) {
      debouncedOnChange(value);
    }
  };

  render() {
    const { value, ...simpleTextInputProps } = this.props;

    return (
      <Debounce func={this.debouncedOnChange}>
        {(dbOnChange: (v: string) => void) => (
          <SimpleTextInput
            {...simpleTextInputProps}
            value={value}
            onChange={v => {
              this.onChange(v);
              dbOnChange(v);
            }}
          />
        )}
      </Debounce>
    );
  }
}
