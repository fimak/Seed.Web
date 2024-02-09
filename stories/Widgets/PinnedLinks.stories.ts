import Banner from '@components/grid/controls/widgets/banner/banner';
import PinnedLinks from '@components/grid/controls/widgets/pinnedLinks/pinnedLinks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PinnedLinks> = {
  title: 'Widgets/PinnedLinks',
  component: PinnedLinks,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    widget: 'PinnedLinks',
    variant: 'Standard',
    content: {
        links: [{
            icon: 'fa-anchor',
            text: '<strong>build</strong> your boat'
        }, {
            icon: 'fa-brochure',
            text: 'view <strong>brochures</strong>'
        }, {
            icon: 'fa-marker',
            text: 'find your <strong>dealer</strong>'
        }]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Top: Story = {
  args: {
    layout: 'Top'
  },
  parameters: {
    docs: {
      description: {
        story: `
Pins the top of the widget to the bottom of the header as the user scrolls.
        `
      }
    }
  }
};

export const Bottom: Story = {
  args: {
    layout: 'Bottom'
  },
  parameters: {
    docs: {
      description: {
        story: `
Pins the bottom of the widget to the bottom of the screen as the user scrolls.

#### Desktop
![desktop](/designs/pinned-links-standard.png)
#### Mobile
![mobile](/designs/pinned-links-standard-mobile.png)
        `
      }
    }
  }
};
