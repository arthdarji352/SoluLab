import React from "react";

import newAdd from "../solulab image/2.png";
import patient from "../solulab image/3.png";
import folder from "../solulab image/4.png";
import upload from "../solulab image/5.png";
import report from "../solulab image/6.png";
import setting from "../solulab image/7.png";
import logout from "../solulab image/8.png";

const NavBar = () => {
  return (
    <div className="flex">
      <div className="w-24">
        <ul>
          <li className="flex flex-col items-center pt-10 ">
            <button>
              <img src={newAdd} alt="add" />
            </button>
            <span className="text-textgray">Add</span>
          </li>
          <li className="flex flex-col items-center pt-10 ">
            <button>
              <img src={patient} alt="patient" />
            </button>
            <span className="text-textgray">patient</span>
          </li>

          <li className="flex flex-col items-center pt-12">
            <button>
              <img src={folder} alt="folder" />
            </button>
            <span className="text-textgray">Folder</span>
          </li>
          <li className="flex flex-col items-center pt-12">
            <button>
              <img src={upload} alt="upload" />
            </button>
            <span className="text-textgray">Upload</span>
          </li>
          <li className="flex flex-col items-center pt-12">
            <button>
              <img src={report} alt="report" />
            </button>
            <span className="text-textgray">Report</span>
          </li>
          <li className="flex flex-col items-center pt-12">
            <button>
              <img src={setting} alt="setting" />
            </button>
            <span className="text-textgray">Setting</span>
          </li>
          <li className="flex flex-col items-center pt-12">
            <button>
              <img src={logout} alt="logout" />
            </button>
            <span className="text-textgray">Logout</span>
          </li>
        </ul>
      </div>
      <div className="h-full border-r border-bordercolor"></div>
    </div>
  );
};

export default NavBar;
