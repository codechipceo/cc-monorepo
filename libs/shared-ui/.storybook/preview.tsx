import '../src/lib/scss/root.scss';

import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';


const preview: Preview = {
  decorators: [
    (Story) => (
      <div data-theme="buildex">
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' as string },
  },
};

export default preview;
