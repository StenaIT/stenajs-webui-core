import { ComponentClass } from 'react';
import { compose, withProps } from 'recompose';
import { isValidTimeString } from '../../../../util/time/TimeTransformer';
import { withTheme } from '../../../util/enhancers/index';
import { WithThemeProps } from '../../../util/enhancers/WithTheme';
import { DefaultTextInput } from '../text-input/DefaultTextInput';
import { SimpleTextInputProps } from '../text-input/SimpleTextInput';

export type __C124912 = ComponentClass<{}>;

const withTimeProps = withProps<
  SimpleTextInputProps,
  SimpleTextInputProps & WithThemeProps
>(({ value, theme }) => ({
  placeholder: 'h:mm',
  size: 4,
  backgroundColor:
    value && !isValidTimeString(value) ? theme.colors.errorBgLight : undefined,
}));

export const TimeTextInput = compose<
  SimpleTextInputProps,
  SimpleTextInputProps
>(withTheme, withTimeProps)(DefaultTextInput);
