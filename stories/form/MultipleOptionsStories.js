import { withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { MultipleOption } from '../../src/components/ui/form/options/MultipleOption';

export const addMultipleOptionsStories = () => {
  storiesOf('Form/MultipleOptions', module).add(
    'with state',
    withState({
      checked: [false, false, false],
    })(
      withInfo()(({ store }) => {
        const options = [
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

        const multipleOptionsProps = {
          allLabel: 'all',
          onAllClick: (e, value) => {
            store.set({ checked: store.state.checked.map(() => !value) });
          },
          onOptionClick: (e, option) => {
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
    ),
  );
};
