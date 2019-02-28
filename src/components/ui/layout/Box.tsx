import * as React from 'react';
import styled from 'react-emotion';
import {
  alignItems,
  AlignItemsProps,
  bgColor,
  BgColorProps,
  DisplayProps,
  flex,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  FlexDirectionProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  width,
  WidthProps,
} from 'styled-system';
import { ThemeMetrics } from '../../../themes/theme-types/ThemeMetrics';
import { useTheme } from '../../theme/UseThemeHook';
import { CSSProperties } from 'react';

// tslint:disable:no-shadowed-variable

type StyledSystemProps = AlignItemsProps &
  BgColorProps &
  DisplayProps &
  FlexDirectionProps &
  FlexProps &
  FlexWrapProps &
  HeightProps &
  JustifyContentProps &
  MaxHeightProps &
  MaxWidthProps &
  WidthProps;

type FlexBoxMetricsProps = {
  metrics: ThemeMetrics;
};

type FlexBoxProps = StyledSystemProps & BoxProps & FlexBoxMetricsProps;

export interface BoxProps extends StyledSystemProps {
  row?: boolean;
  spacing?: boolean | number;
  indent?: boolean | number;
  style?: CSSProperties;
}

const FlexBox = styled('div')<FlexBoxProps>`
  display: ${props => props.display || 'flex'};
  ${alignItems}
  ${bgColor}
  ${flex}
  flex-direction: ${props =>
    (props.row && 'row') || props.flexDirection || 'column'}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${maxHeight}
  ${maxWidth}
  padding: ${props =>
    numberOrZero(props.spacing) * props.metrics.spacing}px ${props =>
  numberOrZero(props.indent) * props.metrics.indent}px;
  ${width}
`;

export const Box: React.FC<BoxProps> = props => {
  const theme = useTheme();
  return <FlexBox metrics={theme.metrics} {...props} />;
};

export const RowBox: React.FC<BoxProps> = props => {
  return <Box row {...props} />;
};

export const ColumnBox: React.FC<BoxProps> = props => {
  return (
    <Box {...props}>
      <div />
    </Box>
  );
};

const numberOrZero = (num: number | boolean | undefined): number =>
  (num as number) || 0;
