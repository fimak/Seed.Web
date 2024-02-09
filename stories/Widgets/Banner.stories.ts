import Banner from '@components/grid/controls/widgets/banner/banner';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Banner> = {
  title: 'Widgets/Banner',
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const ImageLeftAligned: Story = {
  args: HomeContent.banner!.imageLeftAligned,
  parameters: {
    docs: {
      description: {
        story: `
This is what the banner should look like if only a background image is provided.

#### Desktop
![desktop](/designs/banner-intro.png)
#### Mobile
![mobile](/designs/banner-intro-mobile.png)
        `
      }
    }
  }
};

export const ImageRightAligned: Story = {
  args: HomeContent.banner!.imageRightAligned,
  parameters: {
    docs: {
      description: {
        story: `
This is identical to the Left Aligned layout, except the text box is positioned in the lower right corner.
        `
      }
    }
  }
};

export const VideoLeftAligned: Story = {
  args: HomeContent.banner!.videoLeftAligned,
  parameters: {
    docs: {
      description: {
        story: `
This is identical to the Left Aligned layout, except it displays a video in the background.

- The video will autoplay, but should pause when the widget leaves the viewport and resume playing when it enters the viewport.
        `
      }
    }
  }
};

export const VideoRightAligned: Story = {
  args: HomeContent.banner!.videoRightAligned,
  parameters: {
    docs: {
      description: {
        story: `
This is identical to the Left Aligned With Video layout, except the text box is positioned in the lower right corner.
        `
      }
    }
  }
};

