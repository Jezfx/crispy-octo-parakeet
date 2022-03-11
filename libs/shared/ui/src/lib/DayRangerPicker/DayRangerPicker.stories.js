import StaticDateRangePickerDemo from './DayRangerPicker';

export default {
  component: StaticDateRangePickerDemo,
  title: 'StaticDateRangePickerDemo',
};

const Template = (args) => <StaticDateRangePickerDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
