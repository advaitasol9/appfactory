import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CheckGroupInput from '../components/CheckGroupInput';

export default {
  title: 'Check Group Input',
  component: CheckGroupInput,
} as ComponentMeta<typeof CheckGroupInput>;

const Template: ComponentStory<typeof CheckGroupInput> = args => (
  <CheckGroupInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Select',
  // selectedOptions: [{ id: 'ind', title: 'India' }],
  type: 'radio',
  options: [
    { id: 'ind', title: 'India' },
    { id: 'UK', title: 'UK' },
    { id: 'USA', title: 'USA' },
    { id: 'others', title: 'Others' },
  ],
};
