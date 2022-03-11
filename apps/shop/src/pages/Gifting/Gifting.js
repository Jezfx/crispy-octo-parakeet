import React, { useEffect } from 'react';
import merge from 'lodash/merge';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import LayoutShop from '@allplants/shop/components/Layout/LayoutShop';
import LayoutPage from '@allplants/shop/components/Layout/LayoutPage';

import { useProducts } from '@allplants/shop/hooks/useProducts';
import { createTheme } from '@mui/material/styles';
import { defaultTheme } from '@allplants/shop/styles/themes/default';

const overrides = {
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: '#f8e8c4',
        },
      },
    },
  },
};

const giftingTheme = createTheme(merge(defaultTheme, overrides));

export default function Gifting() {
  const { fetchProducts, products } = useProducts();

  // in next this would be done in getStaticProps
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <LayoutPage>
      <ThemeProvider theme={giftingTheme}>
        <Box sx={{ background: '#f8e8c4' }}>
          <LayoutShop products={products} />
        </Box>
      </ThemeProvider>
    </LayoutPage>
  );
}
