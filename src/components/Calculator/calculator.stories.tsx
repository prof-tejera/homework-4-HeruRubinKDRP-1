import React from "react";
import Calculator from "./Calculator";
import { Meta } from "@storybook/react";


export default {
  title: "Organisms/Calculator",
  component: Calculator,
  tags : ['autodocs'],
  argTypes : {

  }
} as Meta;

const Template = () => <Calculator />;

export const Default = Template.bind({});


