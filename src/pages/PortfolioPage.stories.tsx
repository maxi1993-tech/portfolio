import type { Meta, StoryObj } from "@storybook/react-vite"
import { PortfolioPage } from "./PortfolioPage"

const meta = {
  title: "Pages/PortfolioPage",
  component: PortfolioPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PortfolioPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
