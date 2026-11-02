import "./Header.scss"
import PersonnalIcon from "../../assets/icons/branding/clair/monogramme-mc.svg?react"
import MenuIcon from "../../assets/icons/interface/clair/menu.svg?react"
import PausedIcon from "../../assets/icons/interface/clair/pause-animations.svg?react"
import PlayIcon from "../../assets/icons/interface/clair/reprendre-animations.svg?react"
import MoonIcon from "../../assets/icons/interface/clair/theme-lune.svg?react"
import SunIcon from "../../assets/icons/interface/clair/theme-soleil.svg?react"
import { useState } from "react"

type HeaderProps = {
  isDark: boolean
  onToggleTheme: () => void
  isPaused: boolean
  onTogglePaused: () => void
}

export function Header({
  isDark,
  onToggleTheme,
  isPaused,
  onTogglePaused,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header" id="header">
      <div className="wrapper header__wrapper">
        <a
          className="header__logo"
          href="#header"
          aria-label="Retour en haut de page"
        >
          <PersonnalIcon aria-hidden="true" />
        </a>

        <div className="header__container">
          <button
            className={
              isOpen
                ? "header__menu-toggle header__menu-toggle--open"
                : "header__menu-toggle"
            }
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
          >
            <MenuIcon aria-hidden="true" />
            Menu
          </button>
          <div
            className={
              isOpen ? "header__menu header__menu--open" : "header__menu"
            }
          >
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <a className="header__link" href="#projets">
                    Projets
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#a-propos">
                    À propos
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#l-ia">
                    L'IA
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#autres-projets">
                    Autres projets
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="header__buttons">
              <button
                className="header__button"
                type="button"
                onClick={onTogglePaused}
                aria-pressed={isPaused}
                aria-label="Pause des animations"
              >
                {isPaused ? (
                  <PlayIcon aria-hidden="true" />
                ) : (
                  <PausedIcon aria-hidden="true" />
                )}
              </button>
              <button
                className="header__button"
                type="button"
                onClick={onToggleTheme}
                aria-pressed={isDark}
                aria-label="Mode sombre"
              >
                {isDark ? (
                  <SunIcon aria-hidden="true" />
                ) : (
                  <MoonIcon aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <p className="header__text">Orienté React</p>
        </div>
      </div>
    </header>
  )
}
