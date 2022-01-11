import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const WEBSITE_LOGO_DARK_THEME =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const WEBSITE_LOGO_LIGHT_THEME =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

const LIGHT_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const DARK_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      const setWebsiteLogo = isDarkTheme
        ? WEBSITE_LOGO_DARK_THEME
        : WEBSITE_LOGO_LIGHT_THEME

      const setThemeImage = isDarkTheme ? LIGHT_THEME_IMAGE : DARK_THEME_IMAGE
      const setBackgroundColor = isDarkTheme ? 'dark-color' : 'light-color'
      const setColor = isDarkTheme ? 'dark-color1' : 'light-color1'

      const clickOnThemeButton = () => {
        toggleTheme()
      }

      return (
        <>
          <div className={`navbar-container ${setBackgroundColor}`}>
            <img
              src={setWebsiteLogo}
              alt="website logo"
              className="website-logo-sizing"
            />
            <ul className="nav-items">
              <li className="home">
                <Link to="/" className={`nav-link ${setColor}`}>
                  Home
                </Link>
              </li>
              <li className="about">
                <Link to="/about" className={`nav-link ${setColor}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={clickOnThemeButton}
              testid="theme"
            >
              <img src={setThemeImage} alt="theme" className="theme" />
            </button>
          </div>
          <hr />
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
