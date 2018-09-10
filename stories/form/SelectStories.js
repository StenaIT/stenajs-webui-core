import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Select from 'react-select';
import { Background } from '../../src/components/ui/colors';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { createSelect } from '../../src/enhancers/select/SelectFactory';
import { selectThemeDark } from '../../src/enhancers/select/SelectTheme';

const StyledSelect = createSelect(Select);
const StyledSelectDark = createSelect(Select, selectThemeDark);

export const addSelectStories = () => {
  storiesOf('Form/Select', module)
    .add(
      'standard',
      withInfo()(() => (
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
      )),
    )
    .add(
      'multiselect',
      withInfo()(() => (
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
      )),
    )
    .add(
      'standard dark',
      withInfo()(() => (
        <div style={{ width: '400px' }}>
          <Background color={'#2e4662'}>
            <Indent num={4}>
              <Spacing num={4}>
                <StyledSelectDark
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
              </Spacing>
            </Indent>
          </Background>
        </div>
      )),
    )
    .add(
      'multiselect dark',
      withInfo()(() => (
        <div style={{ width: '600px' }}>
          <Background color={'#2e4662'}>
            <Indent num={4}>
              <Spacing num={4}>
                <StyledSelectDark
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
              </Spacing>
            </Indent>
          </Background>
        </div>
      )),
    );
};
