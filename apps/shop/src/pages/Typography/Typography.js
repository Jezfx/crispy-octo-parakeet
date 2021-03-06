import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import { useProducts } from '@allplants/shop/hooks/useProducts';

import LayoutTypography from '@allplants/shop/components/Layout/LayoutTypography';
import LayoutPage from '@allplants/shop/components/Layout/LayoutPage';

export default function Typography() {
  const { fetchProducts, products } = useProducts();

  // in next this would be done in getStaticProps
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <LayoutPage>
      <Container>
        <LayoutTypography />
      </Container>
    </LayoutPage>
  );
}
