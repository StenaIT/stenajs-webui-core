import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Range } from 'rc-slider';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { createSlider } from '../../src/components/ui/slider/Slider';

const Slider = createSlider(Range);

interface State {
  value: number[];
}

export const addSliderStories = () => {
  storiesOf('Slider/Slider', module)
    .addDecorator(withInfo())
    .add(
      'default',
      withState<State>({
        value: [10, 70],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: number[]) => {
          store.set({ value });
        };
        return (
          <Slider
            min={0}
            max={100}
            onChange={onChange}
            step={10}
            value={store.state.value}
          />
        );
      }),
    )
    .add(
      'with marks',
      withState<State>({
        value: [10, 70],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: number[]) => {
          store.set({ value });
        };
        const createMarks = (numberOfMarks: number) => {
          const marks = {};
          for (let i = 0; i <= numberOfMarks; i++) {
            marks[i * 10] = `${i * 10} kg`;
          }
          return marks;
        };
        return (
          <Slider
            marks={createMarks(10)}
            min={0}
            max={100}
            onChange={onChange}
            step={10}
            value={store.state.value}
          />
        );
      }),
    )
    .add(
      'with theme',
      withState<State>({
        value: [10, 70],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: number[]) => {
          store.set({ value });
        };
        const createMarks = (numberOfMarks: number) => {
          const marks = {};
          for (let i = 0; i <= numberOfMarks; i++) {
            marks[i * 10] = `${i * 10} kg`;
          }
          return marks;
        };
        return (
          <UseTheme
            theme={{
              components: {
                Slider: {
                  handleColor: 'mediumseagreen',
                  railColor: 'lightpink',
                  railMarkTextColor: 'darkred',
                  trackColor: 'lightgreen',
                  trackMarkTextColor: 'seagreen',
                },
              },
            }}
          >
            <Slider
              marks={createMarks(10)}
              min={0}
              max={100}
              onChange={onChange}
              step={10}
              value={store.state.value}
            />
          </UseTheme>
        );
      }),
    );
};
