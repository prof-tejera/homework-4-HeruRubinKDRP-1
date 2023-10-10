import React from "react";
import Calculator, { CalculatorProps } from "./Calculator";
import { Meta } from "@storybook/react";


export default {
  title: "Organisms/Calculator",
  component: Calculator,
  tags : ['autodocs'],
  argTypes : {

  }
} as Meta;

const Template = (args : CalculatorProps) => <Calculator {...args} />;

export const Default = Template.bind({});


