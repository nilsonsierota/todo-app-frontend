import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#2567B4';
const secondary = '#F9B531';

const theme = {
  fontSizes,
  fonts: {
    primary: 'Raleway, sans-serif',
    secondary: 'Roboto, sans-serif',
  },
  colors: {
    primary,
    secondary,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
