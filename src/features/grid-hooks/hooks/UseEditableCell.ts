import * as React from 'react';
import { RevertableValue, useRevertableValue } from './UseRevertableValue';
const {
  useCallback,
  useMemo,
  useState,
} = React;

export type AllowedInputType = 'all' | 'numeric' | 'alphanumeric' | 'letters';

type OnStartEditingFunc = (keyEvent?: KeyDownEvent) => void;

export interface UseEditableCellOptions<TValue> {
  /**
   * Specifies if cell is editable.
   */
  isEditable?: boolean;
  /**
   * Types of keyboard input that will start editing and pre-fill editor.
   */
  allowedInputType?: AllowedInputType;
  /**
   * Callback that is invoked when editing a cell is started.
   */
  onStartEditing?: OnStartEditingFunc;
  /**
   * Callback that is invoked when editing a cell is finished with a value result.
   * @param value
   */
  onChange?: (value: TValue | undefined) => void;
}

export interface UseEditableCellResult<TValue> {
  onKeyDown: React.KeyboardEventHandler;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  lastKeyEvent: KeyDownEvent | undefined;
  revertableValue: RevertableValue<TValue>;
  onDoubleClick: () => void;
}

export interface KeyDownEvent {
  altKey: boolean;
  charCode: number;
  ctrlKey: boolean;
  key: string;
  keyCode: number;
  locale: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  which: number;
}

const createKeyDownEvent = (event: React.KeyboardEvent): KeyDownEvent => ({
  altKey: event.altKey,
  charCode: event.charCode,
  ctrlKey: event.ctrlKey,
  key: event.key,
  keyCode: event.keyCode,
  locale: event.locale,
  location: event.location,
  metaKey: event.metaKey,
  repeat: event.repeat,
  shiftKey: event.shiftKey,
  which: event.which,
});

export const useEditableCell = <TValue>(
  value: TValue,
  {
    isEditable = false,
    allowedInputType = 'all',
    onStartEditing,
  }: UseEditableCellOptions<TValue>,
): UseEditableCellResult<TValue> => {
  const [isEditing, setIsEditing] = useState(false);
  const [lastKeyEvent, setLastKeyEvent] = useState<KeyDownEvent | undefined>(
    undefined,
  );

  const startEditing = useCallback(
    () => {
      if (isEditable) {
        setIsEditing(true);
      }
    },
    [isEditable, setIsEditing],
  );

  const revertableValue = useRevertableValue<TValue>(value);

  const onKeyDown = useMemo(
    () =>
      createKeyDownHandler(
        isEditing,
        isEditable,
        setIsEditing,
        setLastKeyEvent,
        allowedInputType,
        onStartEditing,
        revertableValue,
      ),
    [
      isEditing,
      isEditable,
      setIsEditing,
      setLastKeyEvent,
      allowedInputType,
      onStartEditing,
      revertableValue,
    ],
  );

  return {
    onKeyDown,
    isEditing,
    setIsEditing,
    lastKeyEvent,
    revertableValue,
    onDoubleClick: startEditing,
  };
};

const createKeyDownHandler = <TValue>(
  isEditing: boolean,
  isEditable: boolean,
  setIsEditing: (isEditing: boolean) => void,
  setLastKeyEvent: (lastKeyEvent: KeyDownEvent | undefined) => void,
  allowedInputType: AllowedInputType,
  onStartEditing: OnStartEditingFunc | undefined,
  revertableValue: RevertableValue<TValue>,
): React.KeyboardEventHandler => e => {
  if (e.key === 'Enter' && isEditable) {
    setLastKeyEvent(undefined);
    setIsEditing(true);
    revertableValue.commit();
    if (onStartEditing) {
      onStartEditing();
    }
    e.preventDefault();
    e.stopPropagation();
  } else if (
    !e.ctrlKey &&
    !e.metaKey &&
    e.key.match(/^[a-zA-Z0-9]$/) &&
    isEditable
  ) {
    // TODO Find nice way to allow full user control, while also providing simplicity.
    const num = parseInt(e.key, 10);
    const lastKeyEvent = createKeyDownEvent(e);
    if (!isNaN(num)) {
      if (
        allowedInputType === 'all' ||
        allowedInputType === 'numeric' ||
        allowedInputType === 'alphanumeric'
      ) {
        setIsEditing(true);
        setLastKeyEvent(lastKeyEvent);
        revertableValue.commit(lastKeyEvent);
        if (onStartEditing) {
          onStartEditing(lastKeyEvent);
        }
        e.preventDefault();
        e.stopPropagation();
      }
    } else if (
      allowedInputType === 'all' ||
      allowedInputType === 'alphanumeric' ||
      allowedInputType === 'letters'
    ) {
      setIsEditing(true);
      setLastKeyEvent(lastKeyEvent);
      revertableValue.commit(lastKeyEvent);
      if (onStartEditing) {
        onStartEditing(lastKeyEvent);
      }
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
