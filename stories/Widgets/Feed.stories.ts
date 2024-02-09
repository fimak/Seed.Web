import Banner from '@components/grid/controls/widgets/banner/banner';
import Feed from '@components/grid/controls/widgets/feed/feed';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Feed> = {
  title: 'Widgets/Feed',
  component: Feed,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Feed>;

export const Blog: Story = {
  args: HomeContent.feed!.blog,
  parameters: {
    docs: {
      description: {
        story: `
#### Desktop
![desktop](/designs/feed-blog.png)
#### Mobile
![mobile](/designs/feed-blog-mobile.png)
        `
      }
    }
  }
};

