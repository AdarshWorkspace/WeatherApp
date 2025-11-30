import { CiCalendar } from "react-icons/ci"
import { TfiLocationPin } from "react-icons/tfi"
import '../ComponentCss/CurrentWeatherForecast.css'
import { useDispatch, useSelector } from "react-redux"
import { CurrentWeatherFetch } from "../redux/slice/CurrentWeatherSlice"
const CurrentWeatherForecast = () => {
  let state = useSelector(state => state)
  let dispatch = useDispatch()
  if (state.currentWeatherData.isLoading)
    if (state.currentWeatherData.data) {
      console.log(state.currentWeatherData.data);
    }

  return (
    <div className="currentWeatherForecastContainer">
      <p>Now</p>
      <button onClick={()=>dispatch(CurrentWeatherFetch())}>Search</button>
      <img src='https://openweathermap.org/img/wn/10d@2x.png' id='weatherIconImage' alt='weatherIconImage'></img>
      <p className="currentWeatherDescription">Scattered Cloud</p>
      <hr />
      <p className="dateAndMonth"><CiCalendar />Wednesday , 1 March </p>
      <p className="location"><TfiLocationPin /> Badlapur</p>
    </div>
  )
}

export default CurrentWeatherForecast
