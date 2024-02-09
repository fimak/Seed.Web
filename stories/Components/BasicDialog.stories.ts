import type { Meta, StoryObj } from '@storybook/react';

import BasicDialog from '@components/dialogs/basicDialog';

const meta: Meta<typeof BasicDialog> = {
  title: 'Modals/BasicDialog',
  component: BasicDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof BasicDialog>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
};
