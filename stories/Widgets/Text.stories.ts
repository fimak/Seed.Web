import Text from '@components/grid/controls/widgets/text/text';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Text> = {
  title: 'Widgets/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Narrow: Story = {
  args: HomeContent.text!.theFinest,
  parameters: {
    docs: {
      description: {
        story: `
#### Desktop
![desktop](/designs/text-narrow.png)
#### Mobile
![mobile](/designs/text-narrow-mobile.png)
        `
      }
    }
  }
};
