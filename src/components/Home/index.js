import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const HOME_LIGHT_THEME =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const HOME_DARK_THEME =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const setHomeTheme = isDarkTheme ? HOME_DARK_THEME : HOME_LIGHT_THEME
      const setBackgroundColor = isDarkTheme
        ? 'dark-bg-color'
        : 'light-bg-color'

      const setColor = isDarkTheme ? 'apply-dark-color' : 'apply-light-color'

      return (
        <>
          <Navbar />
          <div className={`home-container ${setBackgroundColor}`}>
            <img src={setHomeTheme} alt="home" className="home-image" />
            <h1 className={setColor}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
