import { MdLightbulb } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, changeLangEN, changeLangTR } from "store/settingsSlice";

function SettingsCard() {
  var isDark = useSelector((state) => state.settingsStore.isDark);
  var lang = useSelector((state) => state.settingsStore.lang);

  const dispatch = useDispatch();

  return (
    <div className="h-screen mx-auto w-5/6 relative flex justify-evenly  items-center text-slate-50 ">
      <div className=" h-2/6 w-auto rounded-3xl p-6 gap-5 bg-indigo-900 flex  items-center">
        <div className="flex flex-col h-full justify-around  text-center gap-3">
          <label
            onClick={() => dispatch(changeLangEN())}
            className={
              "transition-colors border-2 p-6 border-sky-400   rounded-xl  " +
              (lang === "EN" && "bg-indigo-500")
            }
          >
            ENG
          </label>
          <label
            onClick={() => dispatch(changeLangTR())}
            className={
              "transition-colors border-2 p-6 border-sky-400   rounded-xl  " +
              (lang === "TR" && "bg-indigo-500")
            }
          >
            TR
          </label>
        </div>
        <label
          onClick={() => dispatch(toggleTheme())}
          className={
            "border-2 flex justify-center items-center text-3xl  p-5 rounded-xl w-full h-full border-sky-500 " +
            (isDark && "bg-indigo-500")
          }
        >
          <MdLightbulb />
        </label>
      </div>
    </div>
  );
}
export default SettingsCard;
