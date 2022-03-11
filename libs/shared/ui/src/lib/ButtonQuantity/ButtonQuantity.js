import { StyledButtonGroup, StyledButton } from './ButtonQuantity.styles';
import Typography from '@mui/material/Typography';

const ButtonQuantity = ({ onIncreaseQuantityClick, quantity = 0 }) => (
  <StyledButtonGroup
    variant="contained"
    aria-label="outlined primary button group"
  >
    <StyledButton
      size="small"
      sx={{ borderRight: 'solid 2px !important' }}
      onClick={onIncreaseQuantityClick}
    >
      -
    </StyledButton>
    <Typography>{quantity}</Typography>
    <StyledButton
      size="small"
      sx={{ borderLeft: 'solid 2px !important' }}
      onClick={onIncreaseQuantityClick}
    >
      +
    </StyledButton>
  </StyledButtonGroup>
);

export default ButtonQuantity;
