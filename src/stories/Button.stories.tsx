import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Press Me',
  rightElement: (
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fabout.twitter.com%2Fen%2Fwho-we-are%2Fbrand-toolkit&psig=AOvVaw3tRrFImRyHSs9LugiW81p2&ust=1681564668785000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjvzNe6qf4CFQAAAAAdAAAAABAE" />
  ),
  onClick: () => console.log('hello'),
};
