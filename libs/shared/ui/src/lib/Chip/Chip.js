import { withStyles } from '@mui/styles';
import { default as MUIChip } from '@mui/material/Chip';

const styles = {
  root: {
    borderRadius: 0,
  },
};

export default withStyles(styles)(MUIChip);
