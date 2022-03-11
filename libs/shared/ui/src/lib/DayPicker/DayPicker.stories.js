import CustomDay from './DayPicker';

export default {
  component: CustomDay,
  title: 'CustomDay',
};

const Template = (args) => <CustomDay {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
