import type { Meta, StoryObj } from '@storybook/react';

import UmbracoModal from '@components/dialogs/umbracoModal';

const meta: Meta<typeof UmbracoModal> = {
  title: 'Modals/UmbracoModal',
  component: UmbracoModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    culture: 'en-us'
  }
};

export default meta;
type Story = StoryObj<typeof UmbracoModal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
};
