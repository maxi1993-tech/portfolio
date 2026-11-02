import "./PortfolioPage.scss"

import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react"

export function PortfolioPage() {
  const [isPaused, setIsPaused] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    )
  }, [isDark])

  return (
    <div className="portfolio-page">
      <Header
        isPaused={isPaused}
        onTogglePaused={() => setIsPaused((current) => !current)}
        onToggleTheme={() => setIsDark((current) => !current)}
        isDark={isDark}
      />
    </div>
  )
}
