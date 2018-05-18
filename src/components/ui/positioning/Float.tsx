import glamorous, { GlamorousComponent } from 'glamorous';

export interface FloatProps {
  right?: boolean;
  left?: boolean;
}

export const Float: GlamorousComponent<FloatProps, FloatProps> = glamorous.div<
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
