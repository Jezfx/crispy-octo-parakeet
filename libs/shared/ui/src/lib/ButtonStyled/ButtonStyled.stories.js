import ButtonStyled from './ButtonStyled';

const Template = (args) => <ButtonStyled {...args} />;

export default {
  title: 'ButtonStyled',
  component: ButtonStyled,
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
