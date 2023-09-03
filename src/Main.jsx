import Navbar from "./components/Navbar";
import HomeCard from "./components/HomeCard";
import Carousel from "./components/Carusel";
import SettingsCard from "./components/SettingsCard";
import { useSelector } from "react-redux";

function Main() {
  var isDark = useSelector((state) => state.settingsStore.isDark);
  return (
    <div className={"flex w-screen h-screen  " + (isDark && "dark")}>
      <div className="fixed  z-0 h-[200vh] w-[200vw] animate-bganim bg-gradient-to-t from-slate-400 to-slate-700 dark:from-slate-800 dark:to-slate-950  "></div>
      <Navbar />

      <Carousel>
        <HomeCard />
        <SettingsCard />
      </Carousel>
    </div>
  );
}
export default Main;
