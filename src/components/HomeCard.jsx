import { BsLinkedin, BsGithub, BsPaperclip } from "react-icons/bs";
function HomeCard() {
  return (
    <div className="dark:bg-slate-900 h-screen w-full relative flex justify-evenly items-center">
      <div className="w-64 h-64 rounded-full bg-red-400 overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + "/img.jpg"}
          className="object-cover h-full"
          alt="Me"
        />
      </div>

      <h1 className="text-sky-50 text-4xl w-2/5">
        Merhaba 👋
        <br /> Ben Rıdvan Web Developer'ım
      </h1>

      <span className="absolute w-auto gap-5 rounded-md bg-gray-500 p-3 justify-evenly  flex bottom-11 right-11  text-slate-100">
        <BsLinkedin className="cursor-pointer origin-left  text-5xl hover:-translate-y-1  transition-all      " />
        <BsGithub className="cursor-pointer origin-left  text-5xl hover:-translate-y-1  transition-all      " />
        <BsPaperclip className="cursor-pointer origin-left  text-5xl hover:-translate-y-1  transition-all      " />
      </span>
    </div>
  );
}

export default HomeCard;
