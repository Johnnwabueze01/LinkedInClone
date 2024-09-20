import logo from "../assets/logo.webp";
import BButton from "./BButton";
import postcard from "../assets/postcard.svg";
import playbtn from "../assets/play-btn.svg";
import puzzle from "../assets/puzzle.svg";
import laptop from "../assets/laptop.svg";
import briefcase from "../assets/briefcase.svg";
import people from "../assets/people.png";

const NavBar = () => {
  return (
    <div className="flex justify-between p-3 mx-20">
      <div className="">
        <img src={logo} className="h-20"></img>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex gap-14 p-1 font-thin text-xs">
          <div className="items-center flex flex-col">
            <img src={postcard} alt="" className="h-7 w-7" />
            <span>Articles</span>
          </div>
          <div className="items-center flex flex-col">
            <img src={people} alt="" className="h-7 w-7" />
            <span>People</span>
          </div>
          <div className="items-center flex flex-col">
            <img src={playbtn} alt="" className="h-7 w-7" />
            <span>Learning</span>
          </div>
          <div className="items-center flex flex-col">
            <img src={briefcase} alt="" className="h-7 w-7" />
            <span>Jobs</span>
          </div>
          <div className="items-center flex flex-col">
            <img src={puzzle} alt="" className="h-7 w-7" />
            <span>Games</span>
          </div>
          <div className="items-center flex flex-col border-l border-r p-1">
            <img src={laptop} alt="" className="h-7 w-7" />
            <span className=" whitespace-pre">Get the App</span>
          </div>
        </div>
        <div className="flex gap-3">
          <BButton>Sign In</BButton>
          <button className="border-2 border-blue bg-blue  whitespace-nowrap text-white rounded-full p-1 w-24 h-10 font-semibold text-base">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
