import { create } from '@storybook/theming';
import Logo from './heru-logo.svg';

export default create(
  {
    base: 'light',
    brandTitle : 'Heru Rubin',
    brandUrl: '/',
    brandTarget :"_self",
    brandImage: Logo
  }
)
