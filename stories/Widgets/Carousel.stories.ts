import Carousel from '@components/grid/controls/widgets/carousel/carousel';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Carousel> = {
  title: 'Widgets/Carousel',
  component: Carousel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Boats: Story = {
  args: HomeContent.carousel!.boats,
  parameters: {
    docs: {
      description: {
        story: `
- The text in the navigation at the top should shrink the further away it is from the boat currently displayed in the middle slide.
- When one of the model numbers at the top is clicked, the carousel should scroll until that boat is displayed in the center.
- The text in the blue box behaves like ticker tape with the text moving to the left (something like [this](https://codepen.io/lewismcarey/pen/GJZVoG), though it should seamlessly wrap the text).
 - Should pause when the slide is not the center slide.
 - Initially should autoplay the ticker for the middle slide when the widget enters the viewport.
- Slides should smoothly scale between sizes after navigating to other slides.
- Ticker element should be handled in its own component so that it can be reused elsewhere if desired. A class name should be supported so that the parent widget can apply styles to it.
- Ticker should expand to a blue text box with all of the text visible when the user hovers over it.
- Background images should be paused videos, as they should play to the end when the user hovers over them.
- The background videos should reset to the start of the video when they exist the viewport.


#### Desktop
![desktop](/designs/carousel-boats.png)
#### Mobile
![mobile](/designs/carousel-boats-mobile.png)
        `
      }
    }
  }
};

export const Text: Story = {
  args: HomeContent.carousel!.text,
  parameters: {
    docs: {
      description: {
        story: `
#### Desktop
![desktop](/designs/carousel-text.png)
#### Mobile
![mobile](/designs/carousel-text-mobile.png)
        `
      }
    }
  }
};
