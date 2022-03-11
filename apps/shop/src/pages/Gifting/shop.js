import React, { useEffect } from 'react';

import { useProducts } from '@allplants/shop/hooks/useProducts';

import LayoutShop from '@allplants/shop/components/Layout/LayoutShop';
import LayoutPage from '@allplants/shop/components/Layout/LayoutPage';
export default function Shop() {
  const { fetchProducts, products } = useProducts();

  // in next this would be done in getStaticProps
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <LayoutPage>
      <LayoutShop products={products} />
    </LayoutPage>
  );
}
