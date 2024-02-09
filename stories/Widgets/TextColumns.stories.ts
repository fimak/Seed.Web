import Banner from '@components/grid/controls/widgets/banner/banner';
import TextColumns from '@components/grid/controls/widgets/textColumns/textColumns';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeContent } from 'content/home';

const meta: Meta<typeof TextColumns> = {
  title: 'Widgets/TextColumns',
  component: TextColumns,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof TextColumns>;

export const ThinDivider: Story = {
  args: HomeContent.textColumns!.unmatchedQuality,
  parameters: {
    docs: {
      description: {
        story: `
#### Desktop
![desktop](/designs/text-columns-standard.png)
#### Mobile
![mobile](/designs/text-columns-narrow-divider-mobile.png)
        `
      }
    }
  }
};

export const ThickDivider: Story = {
  args: HomeContent.textColumns!.featuresAndCapabilities,
  parameters: {
    docs: {
      description: {
        story: `
#### Desktop
![desktop](/designs/text-columns-large.png)
#### Mobile
![mobile](/designs/text-columns-wide-divider-mobile.png)
        `
      }
    }
  }
};

