import styled from '@emotion/styled';
import * as React from 'react';
import {
  alignItems,
  AlignItemsProps,
  background,
  BackgroundProps,
  DisplayProps,
  flex,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  MinWidthProps,
  width,
  WidthProps,
} from 'styled-system';
import { ThemeMetrics } from '../../../themes/theme-types/ThemeMetrics';
import { Omit } from '../../../types/Omit';
import { useTheme } from '../../theme/UseThemeHook';

// tslint:disable:no-shadowed-variable

type StyledSystemProps = AlignItemsProps &
  DisplayProps &
  BackgroundProps &
  FlexDirectionProps &
  FlexProps &
  FlexWrapProps &
  HeightProps &
  JustifyContentProps &
  MinHeightProps &
  MaxHeightProps &
  MinWidthProps &
  MaxWidthProps &
  WidthProps;

type FlexBoxMetricsProps = {
  metrics: ThemeMetrics;
};

type FlexBoxProps = BoxProps & FlexBoxMetricsProps;

export interface BoxProps extends StyledSystemProps {
  innerRef?: React.Ref<HTMLDivElement>;
  row?: boolean;
  spacing?: boolean | number;
  indent?: boolean | number;
  style?: React.CSSProperties;
}
const FlexBox = styled.div<FlexBoxProps>`
  display: ${props => props.display || 'flex'};
  ${alignItems};
  ${background};
  ${flex};
  flex-direction: ${props =>
    (props.row && 'row') || props.flexDirection || 'column'};
  ${flexWrap};
  ${height};
  ${justifyContent};
  ${minHeight};
  ${maxHeight};
  ${maxWidth};
  padding: ${props => numberOrZero(props.spacing) * props.metrics.spacing}px
    ${props => numberOrZero(props.indent) * props.metrics.indent}px;
  ${width};
`;

export const Box: React.FC<BoxProps> = ({ innerRef, ...props }) => {
  const theme = useTheme();
  return <FlexBox ref={innerRef} metrics={theme.metrics} {...props} />;
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
