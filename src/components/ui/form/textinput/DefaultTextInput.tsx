import { ComponentClass } from 'react';
import { compose, withProps } from 'recompose';
import { withTheme } from '../../../util/enhancers';
import { WithThemeProps } from '../../../util/enhancers/WithTheme';
import { SimpleTextInput, SimpleTextInputProps } from './SimpleTextInput';
import { css } from 'emotion';

export type __C12491142 = ComponentClass<{}>;

// TODO Move to theme.
const inputClass = css`
  ::placeholder {
    color: #cccdcf;
  }
`;

const withStyle = withProps<
  SimpleTextInputProps,
  SimpleTextInputProps & WithThemeProps
>(({ theme }) => ({
  className: inputClass,
  style: {
    borderRadius: theme.components.DefaultTextInput.borderRadius,
    border: theme.components.DefaultTextInput.border,
    fontSize: theme.components.DefaultTextInput.fontSize,
    height: theme.components.DefaultTextInput.height,
    paddingLeft: theme.components.DefaultTextInput.paddingLeft,
    paddingRight: theme.components.DefaultTextInput.paddingRight,
  },
}));

export const DefaultTextInput = compose<
  SimpleTextInputProps,
  SimpleTextInputProps
>(withTheme, withStyle)(SimpleTextInput);
