import './Header.scss';
import logo from "../../assets/icons/branding/clair/monogramme-mc.svg"
import logoMenu from "../../assets/icons/interface/clair/menu.svg"
import logoBreak from "../../assets/icons/interface/clair/pause-animations.svg"
import logoMoon from "../../assets/icons/interface/clair/theme-lune.svg"

export function Header() {

  return (
    <header className="header" id="header">
      <div className="wrapper header__wrapper">
        <a className="header__logo" href="#header">
          <img src={logo} alt="Retour en haut de page" />
        </a>

        <div className="header__container">
          <button className="header__menu-toggle header__menu-toggle--open" type="button" aria-label="Ouvrir le menu">
            <img src={logoMenu} alt="" />
            Menu
          </button>
          <div className="header__menu header__menu--open">
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item"><a className="header__link" href="#projets">Projets</a></li>
                <li className="header__item"><a className="header__link" href="#a-propos">À propos</a></li>
                <li className="header__item"><a className="header__link" href="#l-ia">L'IA</a></li>
                <li className="header__item"><a className="header__link" href="#autres-projets">Autres projets</a></li>
                <li className="header__item"><a className="header__link" href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div className="header__buttons">
              <button className="header__button" type="button" aria-label="Désactiver les animations"><img src={logoBreak} alt="" /></button>
              <button className="header__button" type="button" aria-label="Activer le mode sombre"><img src={logoMoon} alt="" /></button>
            </div>
          </div>
          <p className="header__text">Orienté React</p>
        </div>
      </div>
    </header>
  )
}
