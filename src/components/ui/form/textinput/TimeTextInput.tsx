import { ComponentClass } from 'react';
import { compose, withProps } from 'recompose';
import { isValidTimeString } from '../../../../util/time/TimeTransformer';
import { withTheme } from '../../../util/enhancers';
import { WithThemeProps } from '../../../util/enhancers/WithTheme';
import { DefaultTextInput } from './DefaultTextInput';
import { SimpleTextInputProps } from './SimpleTextInput';

export type __C124912 = ComponentClass<{}>;

const withTimeProps = withProps<
  SimpleTextInputProps,
  SimpleTextInputProps & WithThemeProps
>(({ value, theme }) => ({
  placeholder: 'h:mm',
  size: 5,
  backgroundColor:
    value && !isValidTimeString(value) ? theme.colors.errorBgLight : undefined,
}));

export const TimeTextInput = compose<
  SimpleTextInputProps,
  SimpleTextInputProps
>(withTheme, withTimeProps)(DefaultTextInput);
