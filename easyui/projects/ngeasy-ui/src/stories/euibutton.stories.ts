import type { Meta, StoryObj } from '@storybook/angular';
import { EuiButtonComponent } from '../lib/components/button/button.component';

const meta: Meta<EuiButtonComponent> = {
  title: 'Eui/Button',
  component: EuiButtonComponent,
  tags: ['autodocs'],
  render: (args: EuiButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<EuiButtonComponent>;

export const Primary: Story = {
  args: {
    bgColor: 'Primary',
    label: 'Primary',
    size: 'Medium',
  },
};
