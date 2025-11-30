import CurrentWeatherForecast from '../Components/CurrentWeatherForecast';
import Navbar from '../Components/Navbar'
import FiveDayWeatherForecast from '../Components/FiveDayWeatherForecast';
import '../PageCss/MainPage.css';
const MainPage = () => {
  return (
    <>
      <div id="mainPage">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='lowerBody'>
          <div className='currentWeatherForecast'>
            <CurrentWeatherForecast />
          </div>
          <div className='fiveDayWeatherForecast'>
            <FiveDayWeatherForecast />
          </div>
          <div className='todayWeatherHighlights'>

          </div>
          <div className='hourlyWeatherForecast'>

          </div>
        </div>

      </div>
    </>
  )
}

export default MainPage
