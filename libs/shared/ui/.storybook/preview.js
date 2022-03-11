import defaultTheme from '../../ui/src/styles/defaultTheme';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

const withThemeProvider = (Story, context) => {
  return (
    <StyledEngineProvider injectFirst>
      <link
        as="style"
        href="https://use.typekit.net/xtr0wtd.css"
        rel="preload"
      />
      <link href="https://use.typekit.net/xtr0wtd.css" rel="stylesheet" />
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const decorators = [withThemeProvider];
