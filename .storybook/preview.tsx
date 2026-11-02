/// <reference types="vite/client" />

import "../src/styles/main.scss"
import type { Preview } from "@storybook/react-vite"

// Tailles des vues Figma
const figmaViewports = {
  mobile: {
    name: "Mobile 375",
    styles: { width: "375px", height: "812px" },
  },
  tablet: {
    name: "Tablet 768",
    styles: { width: "768px", height: "1024px" },
  },
  desktop: {
    name: "Desktop 1440",
    styles: { width: "1440px", height: "900px" },
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    viewport: {
      options: figmaViewports,
    },
  },
}

export default preview
