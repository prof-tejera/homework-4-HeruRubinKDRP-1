/** @type { import('@storybook/react').Preview } */
import React from "react";
import GlobalStyle from "../src/components/_CommonStyles/GlobalStyles";
export const decorators = [
  (Story) => (
    <React.Fragment>
      <GlobalStyle />
      <Story />
    </React.Fragment>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
