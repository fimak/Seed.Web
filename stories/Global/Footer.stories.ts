import Footer from '@components/footer/footer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Global/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Standard: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Desktop
![desktop](/designs/footer.png)
#### Mobile
![mobile](/designs/footer-mobile.png)
        `
      }
    }
  }
};
