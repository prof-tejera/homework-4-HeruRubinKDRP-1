import React from "react";
import { Meta } from "@storybook/react";
import Number, { iNumberProps } from "./Number";

export default {
  title: "Components/Number",
  component: Number,
  tags : ['autodocs'],
  argTypes : {
value: {
  control : 'number',
}
  }
} as Meta;

const Template = (args : iNumberProps) => <Number  value={args.value} onClick={() => {
}}   />;

export const Default = Template.bind({});