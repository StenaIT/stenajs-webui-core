import { RefObject } from 'react';

export interface RequiredComponentProps<T> {
  className?: string;
  innerRef?: RefObject<T>;
}

export interface RequiredInputComponentProps<T, I>
  extends RequiredComponentProps<T> {
  inputRef?: RefObject<I>;
}
