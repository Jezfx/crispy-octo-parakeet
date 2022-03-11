import ProductModal from './ProductModal';

export default {
  component: ProductModal,
  title: 'ProductModal',
};

const Template = (args) => <ProductModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
