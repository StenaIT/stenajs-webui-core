import * as React from 'react';
import styled from '@emotion/styled';
import {
  alignItems,
  AlignItemsProps,
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
import { Omit } from '../../../types/Omit';
import { useTheme } from '../../theme/UseThemeHook';

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
  style?: React.CSSProperties;
}
const FlexBox = styled.div<FlexBoxProps>`
  display: ${props => props.display || 'flex'};
  ${alignItems}
  background-color: #fafafa;
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

export type RowBoxProps = Omit<BoxProps, 'row'>;

export const RowBox: React.FC<RowBoxProps> = props => {
  return <Box row {...props} />;
};

export type ColumnBoxProps = Omit<BoxProps, 'row'>;

export const ColumnBox: React.FC<ColumnBoxProps> = props => {
  return (
    <Box {...props}>
      <div />
    </Box>
  );
};

const numberOrZero = (num: number | boolean | undefined): number =>
  (num as number) || 0;
