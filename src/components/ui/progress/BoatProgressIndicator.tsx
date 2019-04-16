import styled from '@emotion/styled';
import * as React from 'react';
import { BoatWrapper } from './BoatWrapper';

const Wrapper = styled('div')({
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

const Locator = styled('div')({
  position: 'relative',
  marginTop: '20px',
  marginLeft: '6px',
});

export const BoatProgressIndicator: React.ComponentType = () => (
  <BoatWrapper>
    <Wrapper>
      <Locator>
        <span className={'ferry'}>
          <span className={'chimney'} />
          <span className={'waves'} />
        </span>
      </Locator>
    </Wrapper>
  </BoatWrapper>
);

BoatProgressIndicator.displayName = 'BoatProgressIndicator';
