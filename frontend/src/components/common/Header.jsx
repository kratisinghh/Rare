import Topbar from "../layout/Topbar"
import Navbar from "./Navbar"
const Header = () => {
  return (
    <header className="border-b border-gray-200">
        {/*Topbar */}
        <Topbar/>
        {/*Navbar */}
        <Navbar/>
        {/*cartdrawer */}
    </header>
  )
}

export default Header