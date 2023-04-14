import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SelectInput from '../components/SelectInput';

// const Link = () => <a href={'https://www.react.com'}>react</a>;

export default {
  title: 'Select Input',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = args => (
  <SelectInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Select Country',
  options: [
    { id: 'ind', title: 'India' },
    { id: 'UK', title: 'UK' },
    { id: 'USA', title: 'USA' },
    { id: 'others', title: 'Others' },
  ],
  onChange: event => {
    console.log(event.target.value);
  },
  // info: <Link />,
  info: 'Field cannot be empty',
};
