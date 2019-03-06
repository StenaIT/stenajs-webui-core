import styled from '@emotion/styled';

export interface FloatProps {
  right?: boolean;
  left?: boolean;
}

export const Float = styled.div<FloatProps>(props => ({
  float: getFloat(props),
}));

const getFloat = ({
  left,
  right,
}: FloatProps): 'left' | 'right' | undefined => {
  if (left) {
    return 'left';
  }
  if (right) {
    return 'right';
  }
  return undefined;
};
