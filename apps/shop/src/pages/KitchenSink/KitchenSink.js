import React from 'react';
import Container from '@mui/material/Container';

import LayoutPage from '@allplants/shop/components/Layout/LayoutPage';
import LayoutKitchenSink from '@allplants/shop/components/Layout/LayoutKitchenSink';

export default function KitchenSink() {
  return (
    <LayoutPage>
      <Container>
        <LayoutKitchenSink />
      </Container>
    </LayoutPage>
  );
}
