import NxWelcome from './nx-welcome';

import {
  ThemeProvider,
  defaultTheme,
  createTheme,
  StyledEngineProvider, // is needed if we use withStyles
} from '@allplants/shared/ui';

const theme = createTheme(defaultTheme);

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <NxWelcome title="shop" />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
