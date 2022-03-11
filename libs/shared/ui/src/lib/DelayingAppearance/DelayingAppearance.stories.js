import DelayingAppearance from './DelayingAppearance';

export default {
  component: DelayingAppearance,
  title: 'DelayingAppearance',
};

const Template = (args) => <DelayingAppearance {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
