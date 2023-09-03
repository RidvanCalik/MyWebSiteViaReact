import "./App.css";

import Navbar from "./components/Navbar";
import HomeCard from "./components/HomeCard";
import Carousel from "./components/Carusel";

function App() {

  
 
  return (
    <div className="flex w-screen h-screen dark">
     <Navbar/>
      <Carousel >
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
      </Carousel>
    </div>
  );
}

export default App;
