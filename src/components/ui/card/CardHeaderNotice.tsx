import * as React from 'react';
import { Column, Indent, Spacing } from '../layout';
import { cardNotice, cardNoticeContainer } from './CardStyle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ArrowBox } from '../box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CardNotice {
  color: string;
  icon: IconProp;
  text: string;
}

export const CardHeaderNotice: React.StatelessComponent<{
  notice: CardNotice;
}> = ({ notice }) => (
  <Column className={`${cardNoticeContainer}`}>
    <div className="CardNotice">
      <Spacing>
        <div className={`${cardNotice}`} style={{ background: notice.color }}>
          <FontAwesomeIcon icon={notice.icon} />
        </div>
        <ArrowBox>
          <Spacing>
            <Indent>{notice.text}</Indent>
          </Spacing>
        </ArrowBox>
      </Spacing>
    </div>
  </Column>
);
