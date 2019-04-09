import {
  KeyboardEvent,
  KeyboardEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { RevertableValue, useRevertableValue } from './UseRevertableValue';

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
   * @param keyEvent
   */
  onStartEditing?: OnStartEditingFunc;
  /**
   * Callback that is invoked when editing a cell stops.
   */
  onStopEditing?: () => void;
  /**
   * Callback that is invoked when editing a cell is finished with a value result.
   * @param value
   */
  onChange?: (value: TValue | undefined) => void;
}

export interface UseEditableCellResult<TValue> {
  onKeyDown: KeyboardEventHandler;
  isEditing: boolean;
  startEditing: OnStartEditingFunc;
  stopEditing: () => void;
  stopEditingAndRevert: () => void;
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

const createKeyDownEvent = (event: KeyboardEvent): KeyDownEvent => ({
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
    onChange,
    onStartEditing,
    onStopEditing,
  }: UseEditableCellOptions<TValue>,
): UseEditableCellResult<TValue> => {
  const [isEditing, setIsEditing] = useState(false);
  const [lastKeyEvent, setLastKeyEvent] = useState<KeyDownEvent | undefined>(
    undefined,
  );
  const revertableValue = useRevertableValue<TValue>(value);

  const startEditing = useCallback(
    (keyEvent?: KeyDownEvent) => {
      if (isEditable) {
        setIsEditing(true);
        if (onStartEditing) {
          onStartEditing(keyEvent);
        }
      }
    },
    [isEditable, onStartEditing, setIsEditing],
  );

  const stopEditing = useCallback(
    () => {
      if (isEditable) {
        setIsEditing(false);
        if (onStopEditing) {
          onStopEditing();
        }
        if (onChange) {
          onChange(revertableValue.value);
        }
      }
    },
    [isEditable, onChange, onStopEditing, revertableValue, setIsEditing],
  );

  const stopEditingAndRevert = useCallback(
    () => {
      if (isEditable) {
        setIsEditing(false);
        if (onStopEditing) {
          onStopEditing();
        }
        revertableValue.revert();
      }
    },
    [isEditable, onStopEditing, revertableValue, setIsEditing],
  );

  const onKeyDown = useMemo(
    () =>
      createKeyDownHandler(
        isEditing,
        isEditable,
        startEditing,
        setLastKeyEvent,
        allowedInputType,
        revertableValue,
      ),
    [
      isEditing,
      isEditable,
      startEditing,
      setLastKeyEvent,
      allowedInputType,
      revertableValue,
    ],
  );

  return {
    onKeyDown,
    isEditing,
    lastKeyEvent,
    revertableValue,
    startEditing,
    stopEditing,
    stopEditingAndRevert,
    onDoubleClick: startEditing,
  };
};

const createKeyDownHandler = <TValue>(
  isEditing: boolean,
  isEditable: boolean,
  startEditing: OnStartEditingFunc,
  setLastKeyEvent: (lastKeyEvent: KeyDownEvent | undefined) => void,
  allowedInputType: AllowedInputType,
  revertableValue: RevertableValue<TValue>,
): KeyboardEventHandler => e => {
  if (e.key === 'Enter' && isEditable) {
    setLastKeyEvent(undefined);
    startEditing();
    revertableValue.commit();
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
        startEditing(lastKeyEvent);
        setLastKeyEvent(lastKeyEvent);
        revertableValue.commit(lastKeyEvent);
        e.preventDefault();
        e.stopPropagation();
      }
    } else if (
      allowedInputType === 'all' ||
      allowedInputType === 'alphanumeric' ||
      allowedInputType === 'letters'
    ) {
      startEditing(lastKeyEvent);
      setLastKeyEvent(lastKeyEvent);
      revertableValue.commit(lastKeyEvent);
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
