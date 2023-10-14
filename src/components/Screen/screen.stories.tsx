import React from "react";
import { Meta } from "@storybook/react";
import Number, { iScreenProps } from "./Screen";
import Screen from "./Screen";

export default {
  title: "Components/Screen",
  component: Number,
  tags : ['autodocs'],
  argTypes : {
    value: {
      control : 'string',
    },
    result: {
      control : 'text',
    }
  }
} as Meta;

const Template = (args : iScreenProps) => <Screen {...args} />;

export const Default = Template.bind({
  value : '1+2*3',
  result : '9'
});