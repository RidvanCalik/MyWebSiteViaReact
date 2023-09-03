import { MdHome, MdSettings } from "react-icons/md";
import Carousel from "./Carusel";
function Navbar({ childrien }) {
  return (
    <div className=" z-10 w-1/12 h-full bg-transparent fixed flex items-center justify-center ">
      <div className="gap-10 h-auto flex flex-col  justify-evenly bg-indigo-900 px-3 py-5 rounded-3xl text-white text-5xl ">
        <MdHome
          className="duration-75 hover:scale-90"
          onClick={() => Carousel.toPage(1)}
        />

        <MdSettings
          className="duration-75 hover:scale-90"
          onClick={() => Carousel.toPage(2)}
        />
      </div>
    </div>
  );
}

export default Navbar;
