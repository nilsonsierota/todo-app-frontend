import styled from 'styled-components';
import { space, variant, SpaceProps } from 'styled-system';

type ButtonProps = SpaceProps & {
  variant: string;
};

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  cursor: pointer;

  ${variant({
    variants: {
      default: {
        backgroundColor: 'transparent',
        color: '#fff',
        borderBottom: '2px solid rgba(255,255,255,0.2)',
      },
      primary: {
        padding: '10px 70px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
      },
    },
  })}
  ${space}
`;

Button.defaultProps = {
  variant: 'default',
};
