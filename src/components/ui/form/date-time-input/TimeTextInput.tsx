import { ComponentClass } from 'react';
import { compose, withProps } from 'recompose';
import { isValidTimeString } from '../../../../util/time/TimeTransformer';
import { withTheme } from '../../../util/enhancers/index';
import { WithThemeProps } from '../../../util/enhancers/WithTheme';
import {
  DefaultTextInput,
  DefaultTextInputProps,
} from '../text-input/DefaultTextInput';

export type __C124912 = ComponentClass<{}>;

const withTimeProps = withProps<
  DefaultTextInputProps,
  DefaultTextInputProps & WithThemeProps
>(({ value, theme }) => ({
  placeholder: 'h:mm',
  iconLeft: 'clock',
  size: 4,
  backgroundColor:
    value && !isValidTimeString(value) ? theme.colors.errorBgLight : undefined,
}));

export const TimeTextInput = compose<
  DefaultTextInputProps,
  DefaultTextInputProps
>(withTheme, withTimeProps)(DefaultTextInput);
