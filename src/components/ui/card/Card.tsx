import * as React from 'react';
import {
  cardContentStyle,
  cardWrapperExpandedStyle,
  cardWrapperStyle,
} from './CardStyle';
import { Border } from '../decorations';
import { Spacing } from '../layout';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardNotice } from './CardHeaderNotice';

export interface CardProps {
  /** borderRadius?:          string
    btnLabelDefault?:       string
    btnLabelExpanded?:      string
    className?:             string
    hasButton?:             boolean
    headerSpacingFactor?:   number
    paddingHorizontal?:     number
    paddingVertical?:       number
    notice?:{color: string,icon: IconProp,text: string}*/
  attributes?: CardAttributes;
  /** Collapsed or Expanded state */
  isExpanded?: boolean;
  /** If attribute "hasButton", handle click */
  onClick?: () => void;
  /** Card header title */
  title?: string;
}
export interface CardAttributes {
  borderRadius?: string;
  btnLabelDefault?: string;
  btnLabelExpanded?: string;
  className?: string;
  hasButton?: boolean;
  headerSpacingFactor?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  notice?: CardNotice;
}

export const Card: React.StatelessComponent<CardProps> = ({
  attributes,
  children,
  isExpanded,
  onClick,
  title,
}) => {
  const defaultAttr: CardAttributes = {
    borderRadius: '4px',
    btnLabelDefault: 'Details',
    btnLabelExpanded: 'Close',
    className: '',
    hasButton: false,
    headerSpacingFactor: 1.4,
    paddingHorizontal: 2,
    paddingVertical: 2,
    notice: undefined,
  };
  const attr = {
    ...defaultAttr,
    ...attributes,
  };
  const Shadow = (props: { children?: JSX.Element }) => (
    <div style={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)' }}>
      {props.children}
    </div>
  );
  return (
    <div
      className={`${cardWrapperStyle} ${
        isExpanded ? cardWrapperExpandedStyle : null
      }`}
    >
      <Spacing>
        <Shadow>
          <Border
            borderRadius={attr.borderRadius}
            style={{ overflow: 'hidden' }}
          >
            <div className={`${cardContentStyle} ${attr.className}`}>
              <CardHeader
                onClick={onClick}
                attributes={attr}
                title={title}
                isExpanded={isExpanded}
              />
              <CardContent
                paddingHorizontal={attr.paddingHorizontal}
                paddingVertical={attr.paddingVertical}
              >
                {children}
              </CardContent>
            </div>
          </Border>
        </Shadow>
      </Spacing>
    </div>
  );
};
