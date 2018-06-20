import { KeyboardEventHandler } from 'react';
import { withHandlers, InferableComponentEnhancerWithProps } from 'recompose';
import { OuterTableProps } from './WithEditStateHandler';

/*
InferableComponentEnhancerWithProps must be imported and used.
This is cause by the combination of --noUnusedLocals and --declaration.
 */
export type __C183457 = InferableComponentEnhancerWithProps<{}, {}>;

export type AllowedType = 'all' | 'numeric' | 'alphanumeric' | 'letters';
export type NavigationMoveDirection = 'up' | 'down' | 'left' | 'right';

export type NavigatableKeyDownHandlerOnMove = (
  direction: NavigationMoveDirection,
) => void;

export interface WithKeyDownHandlerOuterProps extends OuterTableProps {
  onMove: NavigatableKeyDownHandlerOnMove;
  onStartEdit: (enteredText?: string) => void;
  isEditing: boolean;
  isEditable: boolean;
}

export interface WithKeyDownHandlerInnerProps {
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

export interface WithKeyDownHandlerOptions {
  type?: AllowedType;
}

export const withNavigatableKeyDownHandler = ({
  type,
}: WithKeyDownHandlerOptions) =>
  withHandlers<WithKeyDownHandlerOuterProps, WithKeyDownHandlerInnerProps>({
    onKeyDown: ({
      onMove,
      onStartEdit,
      isEditing,
      isEditable,
    }: WithKeyDownHandlerOuterProps): KeyboardEventHandler<
      HTMLDivElement
    > => e => {
      if (!isEditing) {
        if (e.key === 'Enter' && isEditable) {
          onStartEdit();
          e.preventDefault();
          e.stopPropagation();
        } else if (e.key === 'Tab' && e.shiftKey) {
          onMove('left');
          e.preventDefault();
          e.stopPropagation();
        } else if (e.key === 'Tab') {
          onMove('right');
          e.preventDefault();
          e.stopPropagation();
        } else if (e.key === 'ArrowLeft') {
          onMove('left');
          e.preventDefault();
          e.stopPropagation();
        } else if (e.key === 'ArrowUp') {
          onMove('up');
          e.preventDefault();
          e.stopPropagation();
        } else if (e.key === 'ArrowRight') {
          onMove('right');
          e.preventDefault();
          e.stopPropagation();
        } else if (e.key === 'ArrowDown') {
          onMove('down');
          e.preventDefault();
          e.stopPropagation();
        } else if (
          !e.shiftKey &&
          !e.ctrlKey &&
          !e.altKey &&
          !e.metaKey &&
          isEditable
        ) {
          const num = parseInt(e.key, 10);
          if (!isNaN(num)) {
            if (
              type === 'all' ||
              type === 'numeric' ||
              type === 'alphanumeric'
            ) {
              onStartEdit(e.key);
              e.preventDefault();
              e.stopPropagation();
            }
          } else if (
            type === 'all' ||
            type === 'alphanumeric' ||
            type === 'letters'
          ) {
            onStartEdit(e.key);
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }
    },
  });
