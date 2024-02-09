import VideoScroll from '@components/grid/controls/widgets/videoScroll/videoScroll';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof VideoScroll> = {
  title: 'Widgets/VideoScroll',
  component: VideoScroll,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof VideoScroll>;

export const Standard: Story = {
  args: HomeContent.videoScroll!.standard,
  parameters: {
    docs: {
      description: {
        story: `
- Scrolling will scrub through the background video.
- The first chunk of text should fade starting from the bottom as the video goes fully underwater (can be done with a css mask).
- The next chunk of text should fade in and move up slowly, as if it’s slowly rising to the surface.
- Animation should snap in the direction the user is scrolling.

#### Desktop
![desktop](/designs/video-scroll-standard.png)
#### Mobile
![mobile](/designs/video-scroll-standard-mobile.png)
        `
      }
    }
  }
};

