import { Ref } from 'react';
import * as React from 'react';

export interface RequiredComponentProps<T> {
  className?: string;
  ref?: Ref<T>;
}

export interface RequiredInputComponentProps<T> extends RequiredComponentProps<T> {
  inputRef?: React.LegacyRef<T>;
}
