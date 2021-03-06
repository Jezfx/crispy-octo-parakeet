import {
  ProductCard,
  Filters,
  ProductModal,
  Box,
  Grid,
  Container,
} from '@allplants/shared/ui';

import Hero from '@allplants/shop/components/Hero';
import { useProducts } from '@allplants/shop/hooks/useProducts';
import { useModal } from '@allplants/shop/hooks/useModal';
import { useBasket } from '@allplants/shop/hooks/useBasket';

const LayoutShop = ({ products = [] }) => {
  const { getProductById } = useProducts();
  const { add, remove } = useModal();
  const { addItem, removeItem, basketTotal } = useBasket();

  const handleOnProductCardClick = (id) => {
    const product = getProductById(id);
    add(<ProductModal close={remove} {...product} />);
  };

  const renderProductsList = ({ title, id }) => (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <ProductCard
        title={title}
        basketTotal={basketTotal}
        onIncreaseQuantityClick={addItem}
        onDecreaseQuantityClick={removeItem}
        onProductCardClick={handleOnProductCardClick}
      />
    </Grid>
  );

  return (
    <>
      <Hero />
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Filters />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid spacing={2} container>
                {products.map(renderProductsList)}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LayoutShop;
