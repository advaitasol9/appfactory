import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CheckInput from '../components/CheckInput';

export default {
  title: 'Check Input',
  component: CheckInput,
} as ComponentMeta<typeof CheckInput>;

const Template: ComponentStory<typeof CheckInput> = args => (
  <CheckInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Select',
  checked: false,
  type: 'radio',
};
