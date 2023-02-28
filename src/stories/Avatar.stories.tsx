import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Avatar from '../components/Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Tushar Sharma',
  subLabel: 'Admin',
};
