import * as React from 'react';
import styled from 'react-emotion';

export interface DrawerCollapsibleStaticProps {
  onClick: () => void;
}

export const AccordionTitleButton = styled('button')`
  box-sizing: border-box;
  cursor:pointer;
  width:100%;
  border:0; 
  padding:0;
  text-align:left;
  font-size: 14px;
  font-family: "Open Sans";
`;

export const AccordionTitle: React.FC<
  DrawerCollapsibleStaticProps
> = ({ onClick, children }) => (
  <AccordionTitleButton
    onClick={onClick}
  >
    <div className="accordion__item">
      <div className="accordion__title">{children}</div>
    </div>
  </AccordionTitleButton>
);
