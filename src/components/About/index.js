import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const ABOUT_LIGHT_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const ABOUT_DARK_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const setAboutTheme = isDarkTheme
        ? ABOUT_DARK_THEME_IMAGE
        : ABOUT_LIGHT_THEME_IMAGE
      const setBackgroundColor = isDarkTheme
        ? 'dark-bg-color'
        : 'light-bg-color'

      const setColor = isDarkTheme ? 'apply-dark-color' : 'apply-light-color'

      return (
        <>
          <Navbar />
          <div className={`about-container ${setBackgroundColor}`}>
            <img src={setAboutTheme} alt="about" className="about-theme" />
            <h1 className={setColor}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
