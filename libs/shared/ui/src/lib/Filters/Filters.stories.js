import Filters from './Filters';

export default {
  component: Filters,
  title: 'Filters',
};

const Template = (args) => <Filters {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
