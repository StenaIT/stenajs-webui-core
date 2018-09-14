import * as React from 'react';
import { compose, setDisplayName, withHandlers, withProps } from 'recompose';
import { Omit } from '../../../../types/index';
import { withTheme, WithThemeProps } from '../../../util/enhancers/WithTheme';
import { UpDownButtons } from '../../buttons/UpDownButtons';
import { Border } from '../../decorations/Border';
import { Space } from '../../layout/Space';
import { DefaultTextInput, DefaultTextInputProps } from './DefaultTextInput';

interface NumericTextInputProps
  extends Omit<DefaultTextInputProps, 'value' | 'onChange'> {
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
  WithOnClicks & WithThemeProps & NumericTextInputProps
>(
  ({
    onClickDown,
    onClickUp,
    theme,
    borderColor,
    contentRight,
    hideButtons,
    disabled,
  }) => ({
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
        <Border
          color={borderColor || theme.components.NumericTextInput.borderColor}
          left
        >
          <UpDownButtons
            onClickUp={disabled ? undefined : onClickUp}
            onClickDown={disabled ? undefined : onClickDown}
            buttonHeight={theme.components.NumericTextInput.buttonHeight}
            iconColor={theme.components.SimpleTextInput.textColor}
          />
        </Border>
      </>
    ),
    disableContentPaddingRight: true,
    inputType: 'number',
  }),
);

export const NumericTextInput = setDisplayName<NumericTextInputProps>(
  'NumericTextInput',
)(
  compose<DefaultTextInputProps, NumericTextInputProps>(
    withOnClicks,
    withTheme,
    withUpDownButtons,
  )(DefaultTextInput),
);

const parseIntOrFloat = (s: string): number =>
  hasDecimal(s) ? parseFloat(s) : parseInt(s, 10);

const hasDecimal = (s: string): boolean =>
  s.indexOf('.') >= 0 || s.indexOf(',') >= 0;
