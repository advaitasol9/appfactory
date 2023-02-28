import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PrimaryInput from '../components/PrimaryInput';
import { FaUserAlt } from 'react-icons/fa';

export default {
  title: 'Primary Input',
  component: PrimaryInput,
} as ComponentMeta<typeof PrimaryInput>;

const Template: ComponentStory<typeof PrimaryInput> = args => (
  <PrimaryInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Name',
  leftIcon: () => <FaUserAlt />,
  error: 'Enter a valid name',
  placeholder: 'Enter your name',
};
