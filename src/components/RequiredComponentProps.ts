import * as React from 'react';

export interface RequiredComponentProps<T> {
  className: string;
  ref: React.LegacyRef<T>;
}

export interface RequiredInputComponentProps<T> extends RequiredComponentProps<T> {
  inputRef: React.LegacyRef<T>;
}
