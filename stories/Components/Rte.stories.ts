import type { Meta, StoryObj } from '@storybook/react';

import Rte from '@components/grid/controls/rte';

const meta: Meta<typeof Rte> = {
  title: 'Components/Rte',
  component: Rte,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Rte>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
        text: `
            <h2>Example Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `
    }
};
