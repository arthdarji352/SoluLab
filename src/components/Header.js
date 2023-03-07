import React from "react";
import logo from "../solulab image/1.png";
import arrow from "../solulab image/line.png";

const Header = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-1 ">
        <button>
          <img className="bg-logocolor p-6 col-span-1" src={logo} alt="logo" />
        </button>
      </div>
      <div className="col-span-7">
        <input
          className=" m-4 p-2 w-2/3 font-bold h-10"
          type="text "
          placeholder="Find by Name or Phone Number"
        />
      </div>
      <div className="py-6 col-span-4 ">
        <div className="flex justify-center">
          <div className="mr-16">
            <ul className="flex items-center">
              <li className="mr-3 ">
                <div className="text-textgray">Gender</div>
              </li>
              <li className="mr-3">Female</li>
              <img className="h-2 cursor-pointer" src={arrow} alt="list" />
            </ul>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mr-3 ">
                <div className="text-textgray">Member Status</div>
              </li>
              <li className="mr-3">Active Member</li>
              <img className="h-2 cursor-pointer" src={arrow} alt="list" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
