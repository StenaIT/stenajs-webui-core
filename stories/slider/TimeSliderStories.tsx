import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Range } from 'rc-slider';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { createTimeSlider } from '../../src/components/ui/slider/TimeSlider';

const TimeSlider = createTimeSlider(Range);

interface Time {
  hours: number;
  minutes: number;
}

interface State {
  value: Time[];
}

export const addTimeSliderStories = () => {
  storiesOf('Slider/TimeSlider', module)
    .addDecorator(withInfo())
    .add(
      'time',
      withState<State>({
        value: [
          {
            hours: 2,
            minutes: 30,
          },
          {
            hours: 4,
            minutes: 0,
          },
        ],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: Time[]) => {
          store.set({ value });
        };
        return <TimeSlider onChange={onChange} value={store.state.value} />;
      }),
    )
    .add(
      '30 minutes step',
      withState<State>({
        value: [
          {
            hours: 2,
            minutes: 30,
          },
          {
            hours: 4,
            minutes: 0,
          },
        ],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: Time[]) => {
          store.set({ value });
        };
        return (
          <TimeSlider onChange={onChange} step={30} value={store.state.value} />
        );
      }),
    )
    .add(
      'with marks',
      withState<State>({
        value: [
          {
            hours: 2,
            minutes: 30,
          },
          {
            hours: 4,
            minutes: 0,
          },
        ],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: Time[]) => {
          store.set({ value });
        };
        return (
          <TimeSlider
            showMarks
            marksInterval={2 * 60}
            onChange={onChange}
            step={30}
            value={store.state.value}
          />
        );
      }),
    )
    .add(
      'with theme',
      withState<State>({
        value: [
          {
            hours: 2,
            minutes: 30,
          },
          {
            hours: 4,
            minutes: 0,
          },
        ],
      })(({ store }: { store: Store<State> }) => {
        const onChange = (value: Time[]) => {
          store.set({ value });
        };
        return (
          <UseTheme
            theme={{
              components: {
                Slider: {
                  handleColor: 'lightcoral',
                  railColor: 'lightgreen',
                  railMarkTextColor: 'seagreen',
                  trackColor: 'lightpink',
                  trackMarkTextColor: 'darkred',
                },
              },
            }}
          >
            <TimeSlider
              showMarks
              marksInterval={2 * 60}
              onChange={onChange}
              step={30}
              value={store.state.value}
            />
          </UseTheme>
        );
      }),
    );
};
