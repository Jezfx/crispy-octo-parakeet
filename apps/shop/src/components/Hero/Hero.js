import * as React from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@allplants/shared/ui';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Hero() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            alt=""
            sx={{
              height: '100%',
              backgroundSize: 'cover',
              backgroundImage: 'url(assets/product_bundle.jpeg)',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: '64px',
            backgroundColor: 'mushroom.main',
          }}
        >
          <Typography variant="h3" component="div" gutterBottom>
            BUILD YOUR BOX
          </Typography>

          <List dense>
            {generate(
              <ListItem>
                <ListItemIcon sx={{ width: 22, minWidth: 'auto', mr: 2 }}>
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="DoneIcon"
                  >
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    sx: { fontWeight: 'bold' },
                  }}
                  primary="Healthy plant-based meals"
                  secondary="All dishes are nutritionally balanced and handmade by our expert chefs."
                />
              </ListItem>
            )}
          </List>
          <Button variant="contained">Build Basket</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
