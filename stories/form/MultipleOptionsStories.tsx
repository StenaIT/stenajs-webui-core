import { Store, withState } from '@dump247/storybook-state';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  MultipleOption,
  MultipleOptionFilterProps,
  Option,
} from '../../src/components/ui/form/options/MultipleOption';

interface State {
  checked: boolean[];
}

export const addMultipleOptionsStories = () => {
  storiesOf('Form/MultipleOptions', module).add(
    'with state',
    withState<State>({
      checked: [false, false, false],
    })(({ store }: { store: Store<State> }) => {
      const options: Option[] = [
        {
          checked: store.state.checked[0],
          code: '0',
          label: 'option 1',
        },
        {
          checked: store.state.checked[1],
          code: '1',
          label: 'option 2',
        },
        {
          checked: store.state.checked[2],
          code: '2',
          label: 'option 3',
        },
      ];

      const multipleOptionsProps: MultipleOptionFilterProps = {
        allLabel: 'all',
        onAllClick: (
          e: React.ChangeEvent<HTMLInputElement>,
          value: boolean,
        ) => {
          store.set({ checked: store.state.checked.map(() => !value) });
        },
        onOptionClick: (
          e: React.ChangeEvent<HTMLInputElement>,
          option: Option,
        ) => {
          store.set({
            checked: store.state.checked.map(
              (checked, index) =>
                option.code === String(index) ? !checked : checked,
            ),
          });
        },
        options,
      };

      return <MultipleOption {...multipleOptionsProps} />;
    }),
  );
};
