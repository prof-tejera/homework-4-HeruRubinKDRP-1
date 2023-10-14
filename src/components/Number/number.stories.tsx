import React from "react";
import { Meta } from "@storybook/react";
import NumberInput, { iNumberProps } from "./NumberInput";

export default {
  title: "Components/Number",
  component: NumberInput,
  tags : ['autodocs'],
  argTypes : {
value: {
  control : 'number',
}
  }
} as Meta;

const Template = (args : iNumberProps) => <NumberInput  value={args.value} onClick={() => {
}}   />;

export const Default = Template.bind({});