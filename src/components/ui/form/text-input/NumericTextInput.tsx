import * as React from 'react';
import { compose, setDisplayName, withHandlers, withProps } from 'recompose';
import { Omit } from '../../../../types/index';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers/WithComponentTheme';
import { UpDownButtons } from '../../buttons/UpDownButtons';
import { Border } from '../../decorations/Border';
import { Space } from '../../layout/Space';
import { DefaultTextInput, DefaultTextInputProps } from './DefaultTextInput';
import { NumericTextInputTheme } from './NumericTextInputTheme';

interface NumericTextInputProps
  extends ComponentThemeProps<'NumericTextInput'>,
    Omit<DefaultTextInputProps, 'value' | 'onChange' | 'theme'> {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  max?: number;
  min?: number;
  step?: number;
  hideButtons?: boolean;
}

interface WithOnClicks {
  onClickUp: () => void;
  onClickDown: () => void;
  onChange: (value: string) => void;
}

const withOnClicks = withHandlers<NumericTextInputProps, WithOnClicks>({
  onClickDown: ({ value = 0, onChange, max, min, step = 1 }) => () => {
    if (onChange) {
      const newValue = value - step;
      onChange(min != null ? Math.max(min, newValue) : newValue);
    }
  },
  onClickUp: ({ value = 0, onChange, max, min, step = 1 }) => () => {
    if (onChange) {
      const newValue = value + step;
      onChange(max != null ? Math.min(max, newValue) : newValue);
    }
  },
  onChange: ({ onChange }) => value => {
    const n = parseIntOrFloat(value);
    if (n != null && !isNaN(n)) {
      onChange(n);
    }
  },
});

const withUpDownButtons = withProps<
  DefaultTextInputProps,
  WithOnClicks &
    WithInnerComponentThemeProps<NumericTextInputTheme> &
    NumericTextInputProps
>(({ onClickDown, onClickUp, theme, contentRight, hideButtons, disabled }) => ({
  contentRight: hideButtons ? (
    contentRight
  ) : (
    <>
      {contentRight && (
        <>
          {contentRight}
          <Space />
        </>
      )}
      <Border color={theme.borderColor} left>
        <UpDownButtons
          onClickUp={disabled ? undefined : onClickUp}
          onClickDown={disabled ? undefined : onClickDown}
          buttonHeight={theme.buttonHeight}
          iconColor={theme.textColor}
        />
      </Border>
    </>
  ),
  disableContentPaddingRight: true,
  inputType: 'number',
}));

const prepareThemeForTextInput = withProps<
  DefaultTextInputProps,
  DefaultTextInputProps
>(props => {
  const { theme } = props;
  const {
    buttonHeight,
    ...defaultTextInputTheme
  } = theme as NumericTextInputTheme;
  return {
    ...props,
    theme: defaultTextInputTheme,
  };
});

export const NumericTextInput = setDisplayName<NumericTextInputProps>(
  'NumericTextInput',
)(
  compose<DefaultTextInputProps, NumericTextInputProps>(
    withOnClicks,
    withComponentTheme('NumericTextInput'),
    withUpDownButtons,
    prepareThemeForTextInput,
  )(DefaultTextInput),
);

const parseIntOrFloat = (s: string): number =>
  hasDecimal(s) ? parseFloat(s) : parseInt(s, 10);

const hasDecimal = (s: string): boolean =>
  s.indexOf('.') >= 0 || s.indexOf(',') >= 0;
