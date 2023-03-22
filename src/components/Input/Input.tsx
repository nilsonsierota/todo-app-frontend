import styled from 'styled-components';
import { FlexProps, flex } from 'styled-system';

type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
  background-color: transparent;
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  ${flex}
`;
