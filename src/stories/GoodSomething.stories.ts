import type { Meta, StoryObj } from '@storybook/vue3'

import GoodSomething from '@/components/GoodSomething.vue'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta: Meta<typeof GoodSomething> = {
  title: 'Example/GoodSomething',
  component: GoodSomething,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof GoodSomething>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {}
