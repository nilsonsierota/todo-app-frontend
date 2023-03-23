import styled from 'styled-components';
import { TypographyProps, space, typography, SpaceProps, color, ColorProps } from 'styled-system';

type TextProps = TypographyProps & SpaceProps & ColorProps;

export const Text = styled.p<TextProps>`
  font-family: 14px;
  color: #fff;
  ${typography}
  ${space}
  ${color}
`;
