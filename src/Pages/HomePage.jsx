import { Link } from "react-router-dom";

import HomePageImage from "../assets/home.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-10 h-[90vh] ">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            Find out best
            <span className=" text-green-500 font-bold"> Online Course</span>
          </h1>
          <p className="'text-xl text-gray-200">
            We have large library of courses taught by highly skilled and
            qualified at reasonable price.
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-green-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-green-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:flex items-center justify-center">
          <img alt="homepage image" src={HomePageImage} className="w-[500px]"/>
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
