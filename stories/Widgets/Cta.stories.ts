import Banner from '@components/grid/controls/widgets/banner/banner';
import Cta from '@components/grid/controls/widgets/cta/cta';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof Cta> = {
  title: 'Widgets/Cta',
  component: Cta,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof Cta>;

export const FlyIn: Story = {
  args: HomeContent.cta!.flyIn,
  parameters: {
    docs: {
      description: {
        story: `
- The text should fade in and then the boat image should animate in from the bottom using greensock’s scrolltrigger library. These animations should happen as the user scrolls rather than triggering an animation at specific scroll points. It should snap to the nearest animation ending if the user stops in the middle of one of the animations.
 - Text revealed
 - Boat image revealed
- Once the animation is finished, the user can scroll down normally to see the cta at the bottom.

#### Desktop
![desktop](/designs/cta-fly-in.png)
#### Mobile
![mobile](/designs/cta-fly-in-mobile.png)
        `
      }
    }
  }
};

