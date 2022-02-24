import NxWelcome from './nx-welcome';

import {
  ThemeProvider,
  defaultTheme,
  createTheme,
  StyledEngineProvider, // is needed if we use withStyles
} from '@allplants/shared/ui';

const theme = createTheme(defaultTheme);

export function App() {
  // console.log(test.defaultTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <NxWelcome title="shop" />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

/**
 * This shoulnd't be here
 * Ignore this
 * ----------------------------
 */

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

/**
 * ----------------------------
 */
