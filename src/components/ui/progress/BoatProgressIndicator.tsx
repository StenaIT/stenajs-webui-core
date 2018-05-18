import * as React from 'react';
import './BoatProgressIndicator.css';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
  width: '80px',
  height: '80px',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
  border: '1px solid transparent',
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Locator = glamorous.div({
  position: 'relative',
  marginTop: '20px',
  marginLeft: '6px',
});

export const BoatProgressIndicator = () => (
  <Wrapper>
    <Locator>
      <span className={'ferry'}>
        <span className={'chimney'} />
        <span className={'waves'} />
      </span>
    </Locator>
  </Wrapper>
);
