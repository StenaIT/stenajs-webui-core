import styled from '@emotion/styled';

export interface FixedProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

export const Fixed = styled.div<FixedProps>`
  display: flex;
  position: fixed;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;
