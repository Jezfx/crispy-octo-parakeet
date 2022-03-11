import ProductCard from './ProductCard';

const Template = (args) => <ProductCard {...args} />;

export default {
  title: 'ProductCard',
  component: ProductCard,
  argTypes: {
    basketTotal: {
      type: 'number',
      defaultValue: 0,
    },
  },
};

export const Default = Template.bind({});

Default.args = {
  basketTotal: 0,
};
