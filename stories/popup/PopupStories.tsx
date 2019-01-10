import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Placement } from 'popper.js';
import * as React from 'react';
import * as Popper from 'react-popper';
import {
  createPopup,
  createUncontrolledPopup,
} from '../../src/components/ui/popup/PopupFactory';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

const placements: Placement[] = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

const Popup = createPopup(Popper);
const UncontrolledPopup = createUncontrolledPopup(Popper);

interface OpenState {
  open: boolean;
}

interface PlacementState {
  placement: number;
}

export const addPopupStories = () => {
  storiesOf('Popup/Popup', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<OpenState>({
        open: false,
      })(({ store }: { store: Store<OpenState> }) => (
        <Popup
          onOpen={() => {
            store.set({ open: true });
          }}
          onClickOutside={() => {
            store.set({ open: false });
          }}
          open={store.state.open}
          referenceChildren={<DefaultText>Open popup</DefaultText>}
          targetMinHeight={200}
          targetMinWidth={300}
        >
          <DefaultText>Content</DefaultText>
        </Popup>
      )),
    )
    .add(
      'standard',
      withState<OpenState>({
        open: false,
      })(({ store }: { store: Store<OpenState> }) => (
        <Popup
          onOpen={() => {
            store.set({ open: true });
          }}
          onClickOutside={() => {
            store.set({ open: false });
          }}
          open={store.state.open}
          referenceChildren={<DefaultText>Open popup</DefaultText>}
          targetMinHeight={200}
          targetMinWidth={300}
          style={{ border: 'solid blue', color: 'red' }}
        >
          <DefaultText>Content</DefaultText>
        </Popup>
      )),
    )
    .add('render props', () => (
      <UncontrolledPopup
        referenceChildren={<DefaultText>Open popup</DefaultText>}
        targetMinHeight={200}
        targetMinWidth={300}
      >
        {({ onClose }) => (
          <div>
            <DefaultText>Content</DefaultText>
            <div onClick={onClose}>Close</div>
          </div>
        )}
      </UncontrolledPopup>
    ))
    .add('uncontrolled', () => (
      <UncontrolledPopup
        referenceChildren={<span>Open popup</span>}
        targetMinHeight={200}
        targetMinWidth={300}
      >
        <DefaultText>Content</DefaultText>
      </UncontrolledPopup>
    ))
    .add('uncontrolled custom styled', () => (
      <UncontrolledPopup
        referenceChildren={<span>Open popup</span>}
        targetMinHeight={200}
        targetMinWidth={300}
        style={{ border: 'solid blue', color: 'red' }}
      >
        <DefaultText>Content</DefaultText>
      </UncontrolledPopup>
    ))
    .add('with modifiers', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UncontrolledPopup
          modifiers={{
            inner: {
              enabled: true,
            },
          }}
          referenceChildren={<span>Open popup</span>}
          targetMinHeight={200}
          targetMinWidth={300}
        >
          <DefaultText>Content</DefaultText>
        </UncontrolledPopup>
      </div>
    ))
    .add(
      'placements',
      withState({
        placement: 0,
      })(({ store }: { store: Store<PlacementState> }) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UncontrolledPopup
            placement={placements[store.state.placement]}
            referenceChildren={
              <span
                onClick={() => {
                  store.set({
                    placement: (store.state.placement + 1) % placements.length,
                  });
                }}
              >
                <DefaultText>Open popup</DefaultText>
              </span>
            }
            targetMinHeight={200}
            targetMinWidth={300}
          >
            <DefaultText>{placements[store.state.placement]}</DefaultText>
          </UncontrolledPopup>
        </div>
      )),
    );
};
