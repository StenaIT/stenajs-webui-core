import styled, { StyledComponent } from 'react-emotion';

export interface FloatProps {
  right?: boolean;
  left?: boolean;
}

export const Float: StyledComponent<FloatProps, {}, {}> = styled('div')<
  FloatProps
>(props => ({
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
