import * as React from 'react';
import { collapsibleStaticStyle, collapsibleStyle } from './DrawerStyle';

export interface IDrawerCollapsibleStaticProps {
  onClick: () => void;
}

export const AccordionItemTitleStatic: React.StatelessComponent<
  IDrawerCollapsibleStaticProps
> = ({ onClick, children }) => (
  <button
    className={`${collapsibleStyle} ${collapsibleStaticStyle}`}
    onClick={onClick}
  >
    <div className="accordion__item">
      <div className="accordion__title">{children}</div>
    </div>
  </button>
);
