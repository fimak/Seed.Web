import Banner from '@components/grid/controls/widgets/banner/banner';
import Hotspots from '@components/grid/controls/widgets/hotspots/hotspots';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Hotspots> = {
  title: 'Widgets/Hotspots',
  component: Hotspots,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Hotspots>;

export const LeftAligned: Story = {
  args: HomeContent.hotspots!.leftAligned,
  parameters: {
    docs: {
      description: {
        story: `
- The first hotspot should be active by default, with the content associated with it shown in the block next to the hotspot area.
- When a hotspot changes, the following animations should occur
 - New image fades in on top of the existing image in the top half of the text block.
 - The images in the center should quickly sink down behind a gradient so that it doesn’t clip the text. The new center image should then swap in and pop back up. Effect should be something like a fishing bobber (see [here](https://www.istockphoto.com/video/float-on-the-waves-close-up-gm804151074-131782033) for a rough idea of what I’m talking about; idea is the old one sinking below the “water” and the new one popping back up to the surface).
 - The text should fade out and slide to the left.
- The hotspot positions need to be percentage based so they will scale with the image as it shrinks. The hotspot should be centered on that position so that it doesn’t shift relative to the image it’s laid on top of.

#### Desktop
![desktop](/designs/hotspots-standard.png)
#### Mobile
![mobile](/designs/hotspots-standard-mobile.png)
        `
      }
    }
  }
};

export const RightAligned: Story = {
  args: HomeContent.hotspots!.rightAligned,
  parameters: {
    docs: {
      description: {
        story: `
Identical to the Left Aligned version, but swaps the positions of the left and right sides.
        `
      }
    }
  }
};

