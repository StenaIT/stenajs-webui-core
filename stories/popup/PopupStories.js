import { withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import * as Popper from 'react-popper';
import { compose } from 'recompose';
import {
  createPopup,
  createUncontrolledPopup,
} from '../../src/components/ui/popup/PopupFactory';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

const placements = [
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

export const addPopupStories = () => {
  storiesOf('Popup', module)
    .add(
      'standard',
      compose(
        withState({
          value: undefined,
        }),
        withInfo(),
      )(({ store }) => (
        <Popup
          onOpen={() => {
            store.set({ open: true });
          }}
          onClickOutside={() => {
            store.set({ open: false });
          }}
          open={store.state.open}
          referenceChildren={<DefaultText>Open popup</DefaultText>}
          targetMinHeight={'200px'}
          targetMinWidth={'300px'}
        >
          <DefaultText>Content</DefaultText>
        </Popup>
      )),
    )
    .add(
      'render props',
      withInfo()(() => (
        <UncontrolledPopup
          referenceChildren={<DefaultText>Open popup</DefaultText>}
          targetMinHeight={'200px'}
          targetMinWidth={'300px'}
        >
          {({ onClose }) => (
            <div>
              <DefaultText>Content</DefaultText>
              <div onClick={onClose}>Close</div>
            </div>
          )}
        </UncontrolledPopup>
      )),
    )
    .add(
      'uncontrolled',
      withInfo()(() => (
        <UncontrolledPopup
          referenceChildren={<span>Open popup</span>}
          targetMinHeight={'200px'}
          targetMinWidth={'300px'}
        >
          <DefaultText>Content</DefaultText>
        </UncontrolledPopup>
      )),
    )
    .add(
      'placements',
      compose(
        withState({
          placement: 0,
        }),
        withInfo(),
      )(({ store }) => (
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
            targetMinHeight={'200px'}
            targetMinWidth={'300px'}
          >
            <DefaultText>{placements[store.state.placement]}</DefaultText>
          </UncontrolledPopup>
        </div>
      )),
    );
};
