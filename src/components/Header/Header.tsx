import "./Header.scss"
import logo from "../../assets/icons/branding/clair/monogramme-mc.svg"
import logoMenu from "../../assets/icons/interface/clair/menu.svg"
import logoBreak from "../../assets/icons/interface/clair/pause-animations.svg"
import logoMoon from "../../assets/icons/interface/clair/theme-lune.svg"
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
        <a className="header__logo" href="#header">
          <img src={logo} alt="Retour en haut de page" />
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
            <img src={logoMenu} alt="" />
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
                <img src={logoBreak} alt="" />
              </button>
              <button
                className="header__button"
                type="button"
                onClick={onToggleTheme}
                aria-pressed={isDark}
                aria-label="Mode sombre"
              >
                <img src={logoMoon} alt="" />
              </button>
            </div>
          </div>
          <p className="header__text">Orienté React</p>
        </div>
      </div>
    </header>
  )
}
