import { withProps } from 'recompose';
import { Omit } from '../../../types';
import { PopperInterface, Popup, PopupProps } from './Popup';
import { UncontrolledPopup, UncontrolledPopupProps } from './UncontrolledPopup';

export const createPopup = (
  Popper: PopperInterface,
): React.ComponentType<Omit<PopupProps, 'Popper'>> => {
  return withProps({ Popper })(Popup);
};

export const createUncontrolledPopup = (
  Popper: PopperInterface,
): React.ComponentType<Omit<UncontrolledPopupProps, 'Popper'>> => {
  return withProps({ Popper })(UncontrolledPopup);
};
