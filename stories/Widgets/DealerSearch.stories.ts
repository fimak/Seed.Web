import Banner from '@components/grid/controls/widgets/banner/banner';
import DealerSearch from '@components/grid/controls/widgets/dealerSearch/dealerSearch';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof DealerSearch> = {
  title: 'Widgets/DealerSearch',
  component: DealerSearch,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof DealerSearch>;

export const ImageLeftAligned: Story = {
  args: HomeContent.dealerSearch!.standard,
  parameters: {
    docs: {
      description: {
        story: `
- When the form is submitted, the user is taken to the dealer search page.
- As the browser shrinks the image should shift to the left until it reaches its mobile position and then the form should slide on top of it. Idea is to smoothly transition from the mobile to desktop designs.

#### Desktop
![desktop](/designs/dealer-search-standard.png)
#### Mobile
![mobile](/designs/dealer-search-standard-mobile.png)
        `
      }
    }
  }
};

