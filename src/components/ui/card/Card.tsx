import * as React from 'react';
import {
  cardContentStyle,
  cardNotice,
  cardNoticeContainer,
  cardTitleStyle,
  cardWrapperExpandedStyle,
  cardWrapperStyle,
} from './CardStyle';
import { Border } from '../decorations';
import { Column, Row, Spacing, Space, Indent } from '../layout';
import { DefaultText } from '../text';
import { StandardButton } from '../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBox } from '../box';
import { IconProp } from '@fortawesome/fontawesome';

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
  notice?: {
    color: string;
    icon: IconProp;
    text: string;
  };
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
              {(attr.hasButton || title || !(attr.notice !== undefined)) && (
                <Border bottom={true}>
                  <Row
                    width="100%"
                    alignItems="flex-end"
                    justifyContent="space-between"
                  >
                    <Column
                      minWidth="300px"
                      alignSelf="flex-start"
                      flexGrow={1}
                    >
                      <Spacing num={attr.headerSpacingFactor}>
                        <Row>
                          <Space />
                          <DefaultText>
                            <span className={`${cardTitleStyle}`}>{title}</span>
                          </DefaultText>
                          <Space />
                        </Row>
                      </Spacing>
                    </Column>
                    <Column alignSelf="flex-end" flexGrow={0}>
                      <Row>
                        <Space />
                        {attr.notice !== undefined && (
                          <Column className={`${cardNoticeContainer}`}>
                            <div className="CardNotice">
                              <Spacing>
                                <div
                                  className={`${cardNotice}`}
                                  style={{ background: attr.notice.color }}
                                >
                                  <FontAwesomeIcon icon={attr.notice.icon} />
                                </div>
                                <ArrowBox>
                                  <Spacing>
                                    <Indent>{attr.notice.text}</Indent>
                                  </Spacing>
                                </ArrowBox>
                              </Spacing>
                            </div>
                          </Column>
                        )}
                        {attr.hasButton && (
                          <Column className="CardBtn">
                            <Spacing>
                              <StandardButton
                                onClick={onClick}
                                label={
                                  isExpanded
                                    ? attr.btnLabelExpanded
                                    : attr.btnLabelDefault
                                }
                              />
                            </Spacing>
                          </Column>
                        )}
                        <Space />
                      </Row>
                    </Column>
                  </Row>
                </Border>
              )}
              <Row>
                <Column className="CardContentWrapper" width="100%">
                  <Spacing num={attr.paddingVertical}>
                    <Indent num={attr.paddingHorizontal}>
                      <Column className="CardContent" width={'100%'}>
                        {children}
                      </Column>
                    </Indent>
                  </Spacing>
                </Column>
              </Row>
            </div>
          </Border>
        </Shadow>
      </Spacing>
    </div>
  );
};
