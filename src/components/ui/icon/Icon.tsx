import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { compose, withProps } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers';
import { DefaultText } from '../text';

export type IconSource = 'fontawesome';

export type IconProps = FontAwesomeProps;

export interface FontAwesomeProps {
  source?: IconSource;
  name: IconProp;
  size?: number;
  color?: string;
}

type InnerProps = IconProps & WithThemeProps;

const IconComponent = ({
  name,
  source = 'fontawesome',
  size = 20,
  color,
}: InnerProps) => {
  if (source === 'fontawesome') {
    return <FontAwesomeIcon icon={name} style={{ fontSize: size, color }} />;
  }
  return <DefaultText>Invalid icon source '{source}'</DefaultText>;
};

const withDefaultColor = withProps<
  Partial<IconProps>,
  IconProps & WithThemeProps
>(({ theme, color }) => ({
  color: color || theme.colors.primaryTextLight,
}));

export const Icon = compose<InnerProps, IconProps>(withTheme, withDefaultColor)(
  IconComponent,
);
