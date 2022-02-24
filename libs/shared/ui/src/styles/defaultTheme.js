// import { orange } from '@mui/material/colors';

const colors = {
  pumpkin: {
    main: '#DE613D',
    contrastText: '#fff',
  },
  mushroom: {
    main: '#e8e3d9',
    contrastText: '#000',
  },
  white: {
    main: '#fff',
    contrastText: '#000',
  },
};

export const defaultTheme = {
  typography: {
    fontFamily: '"filson-pro",Arial,sans-serif',
    h1: {
      fontSize: 72,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    h6: {
      fontSize: 18,
      lineHeight: 1.3,
      fontWeight: 'bold',
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: 'rgb(255, 219, 102)',
    },
    secondary: {
      main: '#19857b',
    },
    // ...colors,
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:hover': {
            background: 'transparent',
          },
          '&.Mui-focusVisible': {
            boxShadow: 'rgb(94 158 214) 0px 0px 0px 2px',
          },
        },
      },
    },
  },
};
