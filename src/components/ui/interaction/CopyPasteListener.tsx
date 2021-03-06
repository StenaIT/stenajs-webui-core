import * as React from 'react';
import {
  ComponentEnhancer,
  compose,
  mapProps,
  withHandlers,
  withProps,
} from 'recompose';
import { omit } from 'lodash';
import { Omit } from '../../../types/Omit';

/*
ComponentEnhancer must be imported and used.
This is cause by the combination of --noUnusedLocals and --declaration.
 */
export type __CD = ComponentEnhancer<{}, {}>;
export interface CopyPasteListenerProps {
  onPaste?: (pasted: string) => void;
  onCopy?: string | (() => string);
}

export interface CopyPasteListenerHandler {
  onPasteHandler: React.ClipboardEventHandler<HTMLDivElement>;
  onCopyHandler: React.ClipboardEventHandler<HTMLDivElement>;
}

export interface InnerOnCopyPasteProp {
  onPaste?: React.ClipboardEventHandler<HTMLDivElement>;
  onCopy?: React.ClipboardEventHandler<HTMLDivElement>;
}

const withPasteHandler = withHandlers<
  CopyPasteListenerProps,
  CopyPasteListenerHandler
>({
  onPasteHandler: ({ onPaste }) => e => {
    if (onPaste) {
      const data = e.clipboardData.getData('text');
      if (data != null) {
        onPaste(data);
      }
      e.preventDefault();
      e.stopPropagation();
    }
  },
  onCopyHandler: ({ onCopy }) => e => {
    if (onCopy) {
      const data = typeof onCopy === 'string' ? onCopy : onCopy();
      e.clipboardData.setData('text', data);
      e.preventDefault();
      e.stopPropagation();
    }
  },
});

const withOnPasteProp = withProps<
  InnerOnCopyPasteProp,
  CopyPasteListenerProps & CopyPasteListenerHandler
>(({ onPasteHandler, onCopyHandler }) => ({
  onPaste: onPasteHandler,
  onCopy: onCopyHandler,
}));

const omitProps = (keys: Array<string>) => mapProps(props => omit(props, keys));

export const withCopyPasteListener = <
  ChildComponentProps extends Omit<React.HTMLAttributes<{}>, 'css'>
>() =>
  compose<
    InnerOnCopyPasteProp,
    Omit<ChildComponentProps, 'onPaste' | 'onCopy'> & CopyPasteListenerProps
  >(
    withPasteHandler,
    withOnPasteProp,
    omitProps(['onPasteHandler', 'onCopyHandler']),
  );

export const withDivCopyPasteListener = withCopyPasteListener<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'css'>
>();

export const CopyPasteListener = withCopyPasteListener()(
  class extends React.Component<InnerOnCopyPasteProp> {
    render() {
      const { onPaste, onCopy } = this.props;
      return (
        <div onPaste={onPaste} onCopy={onCopy}>
          {this.props.children}
        </div>
      );
    }
  },
);
