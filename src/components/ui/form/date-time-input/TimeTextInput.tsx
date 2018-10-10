import { faClock } from '@fortawesome/free-solid-svg-icons';
import { ComponentClass } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { isValidTimeString } from '../../../../util/time/TimeTransformer';
import { addIcons } from '../../../icon-library/IconLibrary';
import { withTheme } from '../../../util/enhancers/index';
import { WithThemeProps } from '../../../util/enhancers/WithTheme';
import {
  DefaultTextInput,
  DefaultTextInputProps,
} from '../text-input/DefaultTextInput';

addIcons(faClock);

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

export const TimeTextInput = setDisplayName<DefaultTextInputProps>(
  'TimeTextInput',
)(
  compose<DefaultTextInputProps, DefaultTextInputProps>(
    withTheme,
    withTimeProps,
  )(DefaultTextInput),
);
