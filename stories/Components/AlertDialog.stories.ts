import type { Meta, StoryObj } from '@storybook/react';

import AlertDialog from '@components/dialogs/alertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Modals/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
};
