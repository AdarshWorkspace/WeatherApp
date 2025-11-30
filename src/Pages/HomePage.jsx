import '../PageCss/HomePage.css'
import CloudIcon from '../assets/cloudIcon.png';
import HomePageCardImage from '../assets/card.gif'
const HomePage = () => {
  const getStartBtnChange = () => {
    document.getElementById('homePage').style.display = "none";
  }
  return (
    <>
      <div id='homePage'>
        <div className='leftcard'>
          <img src={HomePageCardImage} className='leftCardImage' alt='HomePageCardImage' />
        </div>
        <div className='rightCard'>
          <img src={CloudIcon} className='rightCardImage' alt='CloudIcon' /><br /><br />
          <p id='appName'>&#10052; Climate Predictino</p><br />
          <p id='appDescription'> A Weather Forecasting App !</p><br /><br />
          <button id='getStartBtn' onClick={getStartBtnChange}> Get Started  &#10095;</button>
        </div>
      </div>
    </>
  )
}

export default HomePage
