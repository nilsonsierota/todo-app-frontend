import styled from 'styled-components';
import {
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  borderRadius,
  color,
  flexbox,
  layout,
  space,
} from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderProps & FlexboxProps;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${borderRadius}
  ${border}
`;
