import { BsLinkedin, BsGithub, BsPaperclip } from "react-icons/bs";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import data from "../lang/index.json";

function HomeCard() {
  console.log(data);

  var lang = useSelector((state) => state.settingsStore.lang);
  return (
    <div className=" h-screen mx-auto w-5/6 relative flex justify-evenly  items-center ">
      <div className="w-64 h-3/6 rounded-3xl overflow-hidden shadow-xl">
        <video
          className="h-full w-full object-cover "
          type="video/mp4"
          autoPlay
          loop
          muted
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-3/6 text-sky-50  ">
        <span className=" text-4xl font-bold ">
          {data[lang]["helloText"]} 👋
        </span>
        <br />
        <span className=" text-3xl"> {data[lang]["presentation_1_Text"]} </span>
        <span className="  text-3xl inline-block mx-3 p-2 shadow-2xl  bg-indigo-900 rounded-xl  ">
          {data[lang]["presentation_2_Text"]}
        </span>
        <br></br>
        <br></br>
        <span className="text-cyan-100 text-xl  ">
          {data[lang]["presentation_3_Text"]}
        </span>
        <br></br>
        <br></br>
        <div className="text-cyan-100  ">
          <span className="text-2xl">{data[lang]["skillsText"]}</span>

          <span className="text-7xl flex flex-wrap gap-1 mt-7">
            <FaHtml5 className="skills    hover:skillsHover" />
            <FaCss3Alt className="skills    hover:skillsHover" />
            <FaJsSquare className="skills    hover:skillsHover" />
            <FaReact className="skills    hover:skillsHover" />
            <FaVuejs className="skills    hover:skillsHover" />
            <RiFlutterFill className="skills  hover:skillsHover" />
            <TbSql className="skills    hover:skillsHover" />
            <FaGithub className="skills    hover:skillsHover" />
          </span>
        </div>
      </div>

      <span className="absolute w-auto gap-5 rounded-md shadow-2xl bg-indigo-900 p-3 justify-evenly  flex bottom-11 right-11  text-slate-100">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rıdvan-ç-7793941b2/"
        >
          <BsLinkedin className="cursor-pointer origin-left  text-5xl hover:-translate-y-1  transition-all      " />
        </a>
        <a target="_blank" href="https://github.com/RidvanCalik">
          <BsGithub className="cursor-pointer origin-left  text-5xl hover:-translate-y-1  transition-all      " />
        </a>
        <a
          target="_blank"
          href="https://github.com/RidvanCalik/RidvanCalik/blob/main/ridvancalikCV.pdf"
        >
          <BsPaperclip className="cursor-pointer origin-left  text-5xl hover:-translate-y-1  transition-all      " />
        </a>
      </span>
    </div>
  );
}

export default HomeCard;
