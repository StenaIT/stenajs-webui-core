import { merge } from 'lodash';
import * as React from 'react';
import { Props as AsyncProps } from 'react-select/lib/Async';
import { Props as SelectProps } from 'react-select/lib/Select';
import { StylesConfig } from 'react-select/lib/styles';
import {
  ComponentEnhancer,
  compose,
  setDisplayName,
  withProps,
} from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../components/util/enhancers';
import { SelectTheme } from './SelectTheme';

export type __C_STYLED_REACT_SELECT_FACTORY = ComponentEnhancer<{}, {}>;

const customStyles = (selectTheme: SelectTheme): StylesConfig => ({
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
    backgroundColor: isDisabled
      ? selectTheme.menu.disabledBackgroundColor
      : isSelected
        ? selectTheme.menu.selectedItemBackgroundColor
        : isFocused
          ? selectTheme.menu.hoverBackgroundColor
          : undefined,
    color: isDisabled
      ? selectTheme.menu.disabledTextColor
      : isSelected
        ? selectTheme.menu.selectedItemTextColor
        : isFocused
          ? selectTheme.menu.hoverTextColor
          : undefined,
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  control: (base, { isFocused }) => ({
    ...base,
    // none of react-selects styles are passed to <View />
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
    minHeight: selectTheme.input.height,
    height: selectTheme.input.height,
    backgroundColor: selectTheme.input.backgroundColor,
    boxShadow: '0',
    borderRadius: selectTheme.input.borderRadius,
    borderColor: isFocused
      ? selectTheme.input.borderColorFocused
      : selectTheme.input.borderColor,
    '&:hover': {
      borderColor: isFocused
        ? selectTheme.input.borderColorFocused
        : selectTheme.input.borderColor,
    },
  }),
  singleValue: base => ({
    ...base,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
    color: selectTheme.input.textColor,
  }),
  noOptionsMessage: base => ({
    ...base,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
  }),
  input: base => ({
    ...base,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
    color: selectTheme.input.textColor,
  }),
  multiValueLabel: base => ({
    ...base,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
    backgroundColor: selectTheme.multiSelect.backgroundColor,
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
  clearIndicator: base => ({
    ...base,
    color: selectTheme.clearButtonColor.standard,
    '&:hover': {
      color: selectTheme.clearButtonColor.hover,
    },
  }),
  placeholder: base => ({
    ...base,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
    color: selectTheme.input.placeholderColor,
  }),
  container: base => ({
    ...base,
  }),
  dropdownIndicator: (base, { isFocused }) => ({
    ...base,
    color: isFocused
      ? selectTheme.arrowColor.focused.standard
      : selectTheme.arrowColor.closed.standard,
    '&:hover': {
      color: isFocused
        ? selectTheme.arrowColor.focused.hover
        : selectTheme.arrowColor.closed.hover,
    },
  }),
  menu: base => ({
    ...base,
    backgroundColor: selectTheme.menu.backgroundColor,
    color: selectTheme.menu.textColor,
    zIndex: selectTheme.menu.zIndex,
  }),
  menuPortal: base => ({
    ...base,
    zIndex: selectTheme.menuPortal.zIndex,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    margin: '3px',
    color: selectTheme.multiSelect.removeButtonTextColor,
    backgroundColor: selectTheme.multiSelect.removeButtonBackgroundColor,
    ':hover': {
      color: selectTheme.multiSelect.removeButtonHoverTextColor,
      backgroundColor: selectTheme.multiSelect.removeButtonHoverBackgroundColor,
    },
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: selectTheme.multiSelect.backgroundColor,
  }),
  loadingMessage: base => ({
    ...base,
    color: selectTheme.loadingIndicator.textColor,
    fontFamily: selectTheme.input.fontFamily,
    fontSize: selectTheme.input.fontSize,
  }),
});

interface WithStyles {
  styles: StylesConfig;
}

const mergeStyles = (
  themeStyle: StylesConfig,
  userStyle?: StylesConfig,
): StylesConfig => {
  if (!userStyle) {
    return themeStyle;
  }
  return merge({}, themeStyle, userStyle);
};

const withStyles = (userStyle?: StylesConfig) =>
  withProps<WithStyles, WithInnerComponentThemeProps<SelectTheme>>(
    ({ theme }) => ({
      styles: mergeStyles(customStyles(theme), userStyle),
    }),
  );

export const createSelect = <T extends {}>(
  selectComponent: React.ComponentType<SelectProps<T>>,
  userStyle?: StylesConfig,
) =>
  setDisplayName<SelectProps<T> & ComponentThemeProps<'Select'>>('Select')(
    compose<SelectProps<T>, SelectProps<T> & ComponentThemeProps<'Select'>>(
      withComponentTheme('Select'),
      withStyles(userStyle),
    )(selectComponent),
  );

export const createAsyncSelect = <T extends {}>(
  selectComponent: React.ComponentType<AsyncProps<T>>,
  userStyle?: StylesConfig,
) =>
  setDisplayName<AsyncProps<T> & ComponentThemeProps<'Select'>>('AsyncSelect')(
    compose<AsyncProps<T>, AsyncProps<T> & ComponentThemeProps<'Select'>>(
      withComponentTheme('Select'),
      withStyles(userStyle),
    )(selectComponent),
  );
