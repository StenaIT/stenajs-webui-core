import { Ref } from 'react';

export interface RequiredComponentProps<T> {
  className?: string;
  ref?: Ref<T>;
}

export interface RequiredInputComponentProps<T, I>
  extends RequiredComponentProps<T> {
  inputRef?: Ref<I>;
}
