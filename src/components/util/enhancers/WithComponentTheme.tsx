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

export interface ComponentThemeProps<T extends keyof ComponentThemes> {
  theme?: DeepPartial<ComponentThemes[T]>;
}

export interface WithInnerComponentThemeProps<T> {
  theme: T;
}

interface WithOverridingTheme<T extends keyof ComponentThemes> {
  overridingTheme?: DeepPartial<ComponentThemes[T]>;
}

export const withComponentTheme = <T extends keyof ComponentThemes>(
  componentName: T,
) =>
  compose<
    WithInnerComponentThemeProps<ComponentThemes[T]>,
    WithInnerComponentThemeProps<DeepPartial<ComponentThemes[T]>>
  >(
    setDisplayName('withComponentTheme()'),
    renameProp('theme', 'overridingTheme'),
    withTheme,
    withPropsOnChange<
      WithInnerComponentThemeProps<ComponentThemes[T]>,
      WithOverridingTheme<T> & WithThemeProps
    >(['theme', 'overridingTheme'], ({ overridingTheme, theme }) => ({
      theme: merge({}, theme.components[componentName], overridingTheme),
    })),
  );
