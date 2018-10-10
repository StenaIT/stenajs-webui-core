import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { setDisplayName } from 'recompose';
import { addIcons } from '../../icon-library/IconLibrary';
import { Icon } from '../icon/Icon';
import { Clickable } from '../interaction/Clickable';
import { Column } from '../layout/Column';
import { Indent } from '../layout/Indent';
import { Row } from '../layout/Row';

addIcons(faCaretDown, faCaretUp);

export interface UpDownButtonsProps {
  onClickUp?: () => void;
  onClickDown?: () => void;
  buttonHeight: string;
  iconColor?: string;
}

export const UpDownButtons = setDisplayName<UpDownButtonsProps>(
  'UpDownButtons',
)(({ onClickDown, onClickUp, buttonHeight, iconColor }) => (
  <Column>
    <Clickable onClick={onClickUp}>
      <Row
        height={buttonHeight}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Indent num={0.75}>
          <Icon name={'caret-up'} size={11} color={iconColor} />
        </Indent>
      </Row>
    </Clickable>
    <Clickable onClick={onClickDown}>
      <Row
        height={buttonHeight}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Indent num={0.75}>
          <Icon name={'caret-down'} size={11} color={iconColor} />
        </Indent>
      </Row>
    </Clickable>
  </Column>
));
