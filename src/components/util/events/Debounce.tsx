import { debounce } from 'lodash';
import * as React from 'react';

export type DebouncedFunc = (_: any) => void;

export interface DebounceProps {
  func: DebouncedFunc;
  delay?: number;
  children: (func: DebouncedFunc) => React.ReactElement<{}>;
}

export class Debounce extends React.Component<DebounceProps> {
  funcDebounced: DebouncedFunc | undefined = undefined;

  constructor(props: DebounceProps) {
    super(props);
  }

  componentWillMount() {
    const { func, delay = 500 } = this.props;
    this.funcDebounced = debounce(func, delay);
  }

  render() {
    const { children } = this.props;
    return children(this.funcDebounced!);
  }
}
