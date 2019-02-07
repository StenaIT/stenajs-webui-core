import {
  FlipProp,
  IconProp,
  RotateProp,
  Transform,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { CSSProperties } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers';
import { DefaultText } from '../text';

export type IconSource = 'fontawesome';

export type IconProps = FontAwesomeProps;

export interface FontAwesomeProps {
  className?: string;
  color?: string;
  flip?: FlipProp;
  name: IconProp;
  pulse?: boolean;
  rotation?: RotateProp;
  size?: number;
  source?: IconSource;
  spin?: boolean;
  style?: CSSProperties;
  transform?: string | Transform;
}

type InnerProps = IconProps & WithThemeProps;

const IconComponent = ({
  className,
  color,
  flip,
  name,
  pulse,
  rotation,
  size = 20,
  source = 'fontawesome',
  spin,
  style,
  transform,
}: InnerProps) => {
  if (source === 'fontawesome') {
    return (
      <FontAwesomeIcon
        className={className}
        color={color}
        flip={flip}
        icon={name}
        pulse={pulse}
        rotation={rotation}
        spin={spin}
        style={{ fontSize: size, ...style }}
        transform={transform}
      />
    );
  }
  return <DefaultText>Invalid icon source '{source}'</DefaultText>;
};

const withDefaultColor = withProps<
  Partial<IconProps>,
  IconProps & WithThemeProps
>(({ theme, color }) => ({
  color: color || theme.colors.primaryTextLight,
}));

export const Icon = setDisplayName<IconProps>('Icon')(
  compose<InnerProps, IconProps>(
    withTheme,
    withDefaultColor,
  )(IconComponent),
);
