import { withStyles } from '@mui/styles';
import { default as MUIButton } from '@mui/material/Button';

const styles = {
  root: {
    color: '#000',
    '&:hover': {
      background: 'transparent',
    },
    '&.Mui-focusVisible': {
      boxShadow: 'rgb(94 158 214) 0px 0px 0px 2px',
    },
  },
  small: {
    fontSize: 14,
  },
  contained: {
    border: '2px solid #000',
    padding: '6px 14px',
    transition: 'none',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#000',
      color: '#fff',
    },
    '&.Mui-disabled': {
      border: 'none',
    },
  },
  outlined: {
    padding: '6px 14px',
    border: '2px solid #000',
    transition: 'none',

    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      border: '2px solid #000',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
};

export default withStyles(styles)(MUIButton);
