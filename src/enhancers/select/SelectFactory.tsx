import * as React from 'react';
import { Props as AsyncProps } from 'react-select/lib/Async';
import { Props as SelectProps } from 'react-select/lib/Select';
import { StylesConfig } from 'react-select/lib/styles';
import { ComponentEnhancer, compose, withProps } from 'recompose';
import { withTheme, WithThemeProps } from '../../components/util/enhancers';
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
    minHeight: '0px',
    height: selectTheme.input.height,
    backgroundColor: selectTheme.input.backgroundColor,
    boxShadow: '0',
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
});

interface WithStyles {
  styles: StylesConfig;
}

const withStyles = withProps<WithStyles, WithSelectTheme>(
  ({ selectTheme }) => ({
    styles: customStyles(selectTheme),
  }),
);

interface WithSelectTheme {
  selectTheme: SelectTheme;
}

const withSelectTheme = (overridingTheme: SelectTheme | undefined) =>
  withProps<WithSelectTheme, WithThemeProps>(({ theme }) => ({
    selectTheme: overridingTheme || theme.components.Select,
  }));

export const createSelect = <T extends {}>(
  selectComponent: React.ComponentType<SelectProps<T>>,
  theme?: SelectTheme,
) =>
  compose<SelectProps<T>, SelectProps<T>>(
    withTheme,
    withSelectTheme(theme),
    withStyles,
  )(selectComponent);

export const createAsyncSelect = <T extends {}>(
  selectComponent: React.ComponentType<AsyncProps<T>>,
  theme?: SelectTheme,
) =>
  compose<AsyncProps<T>, AsyncProps<T>>(
    withTheme,
    withSelectTheme(theme),
    withStyles,
  )(selectComponent);
