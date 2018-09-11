import * as React from 'react';
import { Async } from 'react-select';
import { createAsyncSelect } from '../../enhancers/select/SelectFactory';
import { selectThemeDark } from '../../enhancers/select/SelectTheme';

const AsyncSelect = createAsyncSelect(Async);
const AsyncSelectDark = createAsyncSelect(Async, selectThemeDark);
const AsyncSelectCustomTheme = createAsyncSelect(Async, undefined, {
  control: base => ({ ...base, backgroundColor: 'red' }),
});

const getOptions = (
  inputValue: string,
): Promise<Array<{ value: string; label: string }>> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          value: 'Mattias',
          label: 'Mattias',
        },
        {
          value: 'Johan',
          label: 'Johan',
        },
        {
          value: 'Dennis the menace',
          label: 'Dennis the menace',
        },
      ]);
    }, 3000);
  });

export const ExampleAsyncSelect = () => (
  <AsyncSelect
    loadOptions={getOptions}
    defaultOptions={[]}
    cacheOptions
    isSearchable
  />
);

export const ExampleAsyncSelectDark = () => (
  <AsyncSelectDark
    loadOptions={getOptions}
    defaultOptions={[]}
    cacheOptions
    isSearchable
  />
);

export const ExampleAsyncCustomTheme = () => (
  <AsyncSelectCustomTheme
    loadOptions={getOptions}
    defaultOptions={[]}
    cacheOptions
    isSearchable
  />
);
