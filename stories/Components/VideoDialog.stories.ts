import type { Meta, StoryObj } from '@storybook/react';
import VideoDialog from '@components/dialogs/videoDialog';

const meta: Meta<typeof VideoDialog> = {
  title: 'Modals/VideoDialog',
  component: VideoDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof VideoDialog>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
};
