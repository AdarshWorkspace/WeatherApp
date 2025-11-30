import '../ComponentCss/Navbar.css'
const Navbar = () => {
  
  return (
    <>
      <div className="navbarComponent">
        <div className="appNameBar" >&#10052; Adarsh Predictino</div>
        <div className="searchBar" >
          <input type='text' id='search' placeholder=' Enter your city ' />
          <button id='searchButton' >Search</button>
        </div>
      </div>
    </>
  )
}
export default Navbar
