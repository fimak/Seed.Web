import Header from '@components/header/header';
import { ImageCropModel } from '@lib/umbraco/types/imageCropModel.type';
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderContent } from 'content/global';

const meta: Meta<typeof Header> = {
  title: 'Global/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: HeaderContent
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Animated: Story = {
  args: {
    startTransparent: true
  },
  parameters: {
    docs: {
      description: {
        story: `
- The background image isn’t part of the header. That comes from the widget sitting behind it.
- Background should transition from blue gradient to solid blue after the user has scrolled down 50px from the top of the page using greensock scroll trigger.
- For pages that don’t have a widget behind the header, the header background should start out as solid blue.
- On mobile, clicking the navigation button on the right side should have the mobile navigation fade in. The lines in the navigation button should animate to form an x (see [www.ctg.com](https://www.ctg.com) on small screens for an example of this sort of thing with it’s hamburger menu in the header).

#### Desktop
![desktop](/designs/header.png)
#### Mobile
![mobile](/designs/header-mobile.png)
        `
      }
    }
  }
};

export const Static: Story = {
  args: {
    startTransparent: false
  },
};
