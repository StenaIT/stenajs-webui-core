import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Select, { components } from 'react-select';
import { SelectComponents } from 'react-select/lib/components';
import {
  ExampleAsyncCustomTheme,
  ExampleAsyncSelect,
  ExampleAsyncSelectDark,
} from '../../examples/select/ExampleSelect';
import { Background } from '../../src/components/ui/colors';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { createSelect } from '../../src/features/select/SelectFactory';
import { selectThemeDark } from '../../src/features/select/SelectTheme';

const StyledSelect = createSelect(Select);

const customDropdownComponents: Partial<SelectComponents<any>> = {
  Option: ({ children, ...optionProps }: any) => (
    <components.Option {...optionProps}>
      <div>{optionProps.data.label}</div>
    </components.Option>
  ),
  SingleValue: ({ children, ...optionProps }: any) => (
    <components.SingleValue {...optionProps}>
      <div>{optionProps.data.value}</div>
    </components.SingleValue>
  ),
};

export const addSelectStories = () => {
  storiesOf('Form/Select', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <div style={{ width: '400px' }}>
        <StyledSelect
          options={[
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
          ]}
        />
      </div>
    ))
    .add('multiselect', () => (
      <div style={{ width: '400px' }}>
        <StyledSelect
          isMulti
          options={[
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
          ]}
        />
      </div>
    ))
    .add('standard dark', () => (
      <div style={{ width: '400px' }}>
        <Background color={'#2e4662'}>
          <Indent num={4}>
            <Spacing num={4}>
              <StyledSelect
                options={[
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
                ]}
                theme={selectThemeDark}
              />
            </Spacing>
          </Indent>
        </Background>
      </div>
    ))
    .add('multiselect dark', () => (
      <div style={{ width: '600px' }}>
        <Background color={'#2e4662'}>
          <Indent num={4}>
            <Spacing num={4}>
              <StyledSelect
                isMulti
                options={[
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
                ]}
                theme={selectThemeDark}
              />
            </Spacing>
          </Indent>
        </Background>
      </div>
    ))
    .add('async select', () => <ExampleAsyncSelect />)
    .add('async select dark', () => (
      <div style={{ width: '600px' }}>
        <Background color={'#2e4662'}>
          <Indent num={4}>
            <Spacing num={4}>
              <ExampleAsyncSelectDark />
            </Spacing>
          </Indent>
        </Background>
      </div>
    ))
    .add('with custom react-select style', () => <ExampleAsyncCustomTheme />)
    .add('with custom instance theme', () => (
      <div style={{ width: '400px' }}>
        <StyledSelect
          theme={{ input: { height: '20px', borderRadius: '10px' } }}
          options={[
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
          ]}
        />
      </div>
    ))
    .add('disabled', () => (
      <div style={{ width: '400px' }}>
        <StyledSelect
          options={[
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
          ]}
          isDisabled={true}
        />
      </div>
    ))
    .add('custom option width', () => (
      <div style={{ width: '100px' }}>
        <StyledSelect
          components={customDropdownComponents}
          options={[
            {
              value: 'M',
              label: 'Mattias',
            },
            {
              value: 'J',
              label: 'Johan',
            },
            {
              value: 'D',
              label: 'Dennis the menace',
            },
          ]}
          theme={{ menu: { width: 'auto', whiteSpace: 'nowrap' } }}
        />
      </div>
    ));
};
