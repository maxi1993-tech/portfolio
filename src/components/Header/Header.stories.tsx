import type { Meta, StoryObj } from "@storybook/react-vite"
import { Header } from "./Header"

const meta = {
  title: "Composants/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    isDark: false,
    onToggleTheme: () => {},
    isPaused: false,
    onTogglePaused: () => {},
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
  globals: { viewport: { value: "mobile" } },
}

export const MobileMenuOpen: Story = {
  globals: { viewport: { value: "mobile" } },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Menu" }))
  },
}

export const Tablet: Story = {
  globals: { viewport: { value: "tablet" } },
}

export const TabletMenuOpen: Story = {
  globals: { viewport: { value: "tablet" } },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Menu" }))
  },
}

export const Desktop: Story = {
  globals: { viewport: { value: "desktop" } },
}
