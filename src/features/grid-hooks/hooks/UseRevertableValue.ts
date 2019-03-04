import { useCallback, useEffect, useState } from 'react';
import { KeyDownEvent } from './UseEditableCell';

export interface RevertableValue<TValue> {
  value: TValue;
  setValue: (value: TValue) => void;
  setRevertValue: (revertValue: TValue) => void;
  revert: () => void;
  commit: (lastKeyEvent?: KeyDownEvent) => void;
}

export const useRevertableValue = <TValue>(
  initialValue: TValue,
): RevertableValue<TValue> => {
  const [value, setValue] = useState<TValue>(initialValue);
  const [revertValue, setRevertValue] = useState<TValue>(initialValue);

  useEffect(
    () => {
      setValue(initialValue);
    },
    [setValue, initialValue],
  );

  const revert = useCallback(
    () => {
      if (revertValue) {
        setValue(revertValue);
      }
    },
    [setValue, revertValue],
  );

  // TODO How do we handle lastKeyEvent
  // tslint:disable:no-any

  const commit = useCallback(
    (lastKeyEvent?: KeyDownEvent) => {
      setRevertValue(value);
      if (lastKeyEvent) {
        setValue(lastKeyEvent.key as any);
      }
    },
    [value, setValue, revertValue],
  );

  return {
    value,
    setValue,
    setRevertValue,
    revert,
    commit,
  };
};
