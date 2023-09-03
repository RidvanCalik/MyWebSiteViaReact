import { MdHome, MdPerson, MdMail, MdSettings } from "react-icons/md";
import Carousel from "./Carusel";
function Navbar({ childrien }) {
  return (
    <div className=" z-10 w-1/12 h-full bg-transparent fixed flex items-center justify-center ">
      <div className="h-3/6 flex flex-col  justify-evenly ">
        <div className="navbar-icon" onClick={() => Carousel.toPage(1)}>
          <MdHome />
        </div>
        <div className="navbar-icon" onClick={() => Carousel.toPage(2)}>
          <MdPerson />
        </div>
        <div className="navbar-icon">
          <MdMail />
        </div>
        <div className="navbar-icon">
          <MdSettings />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
