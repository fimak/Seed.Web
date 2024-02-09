import Banner from '@components/grid/controls/widgets/banner/banner';
import Slideshow from '@components/grid/controls/widgets/slideshow/slideshow';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Slideshow> = {
  title: 'Widgets/Slideshow',
  component: Slideshow,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Slideshow>;

export const Standard: Story = {
  args: HomeContent.slideshow!.standard,
  parameters: {
    docs: {
      description: {
        story: `
- The animation should be handled with greensock ScrollTrigger with it snapping to the end of the nearest slide.
- The animation should be a screen animation where as a line moves up the next slide is revealed.

#### Desktop
![desktop](/designs/slideshow-standard.png)
#### Mobile
![mobile](/designs/slideshow-standard-mobile.png)
        `
      }
    }
  }
};

