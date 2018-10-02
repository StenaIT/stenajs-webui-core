import { merge } from 'lodash';
import {
  compose,
  renameProp,
  setDisplayName,
  withPropsOnChange,
} from 'recompose';
import { ComponentThemes } from '../../../themes/theme-types/ComponentThemes';
import { DeepPartial } from '../../../types/DeepPartial';
import { withTheme, WithThemeProps } from './WithTheme';

export interface WithComponentThemeProps<T> {
  theme: T;
}

interface WithOverridingTheme<T extends keyof ComponentThemes> {
  overridingTheme?: DeepPartial<ComponentThemes[T]>;
}

export const withComponentTheme = <T extends keyof ComponentThemes>(
  componentName: T,
) =>
  compose<
    WithComponentThemeProps<ComponentThemes[T]>,
    WithComponentThemeProps<DeepPartial<ComponentThemes[T]>>
  >(
    setDisplayName('withComponentTheme()'),
    renameProp('theme', 'overridingTheme'),
    withTheme,
    withPropsOnChange<
      WithComponentThemeProps<ComponentThemes[T]>,
      WithOverridingTheme<T> & WithThemeProps
    >(['theme', 'overridingTheme'], ({ overridingTheme, theme }) => ({
      theme: merge({}, theme.components[componentName], overridingTheme),
    })),
  );
