import Button from './Button';

const Template = (args) => <Button {...args} />;

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      type: 'select',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
    },
    color: {
      type: 'select',
      defaultValue: 'primary',
      description: 'background colour',
      options: [
        'inherit',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ],
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
};

export const Contained = Template.bind({});

Contained.args = {
  children: 'contained',
  variant: 'contained',
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: 'outlined',
  variant: 'outlined',
};

export const Text = Template.bind({});

Text.args = {
  children: 'text',
  variant: 'text',
};
