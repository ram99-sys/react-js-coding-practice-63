import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const setBgColor = isDarkTheme
        ? 'apply-dark-color2'
        : 'apply-light-color2'

      const setHeadingColor = isDarkTheme ? 'dark-heading' : 'light-heading'

      return (
        <>
          <Navbar />
          <div className={`not-found-container ${setBgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={setHeadingColor}>Lost Your Way</h1>
            <p className="text">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
