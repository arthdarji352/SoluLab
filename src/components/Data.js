import React from "react";

const Data = () => {
  return (
    <div>
      <div className="w-full border-t border-bordercolor"></div>

      <div className="grid pt-5 ">
        <div className="flex">
          <div className="grid-cols-7">
            <div className="flex ml-6 ">
              <h1 className="font-bold text-2xl pl-9">Diane Cooper</h1>
              <p className="pt-3 ml-3 text-sm">diane.cooper@example.com</p>
            </div>

            <div className="grid grid-cols-4 divide-x w-54 m-4">
              <div>
                <ul className="flex flex-col items-center m-2 p-2">
                  <li className="text-textgray">Gender</li>
                  <li>Female</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col m-2 p-2">
                  <li className="text-textgray">Birthday</li>
                  <li>Feb 24th,1997</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col m-2 p-2">
                  <li className="text-textgray">Phone number</li>
                  <li>(239)555-0108</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col m-2 p-2">
                  <li className="text-textgray">Member Status</li>
                  <li>Active Member</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-80 pt-5 pl-16">
            <div className="grid grid-cols-2 divide-x w-54 m-4">
              <div>
                <ul className="flex flex-col items-center m-2 p-2">
                  <li className="text-2xl">15</li>
                  <li>Past</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col m-2 p-2">
                  <li className="text-2xl">02</li>
                  <li>Upcoming</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="text-logocolor text-bold cursor-pointer">
                View ECG
                <br />
                Report
                <br />
                Documents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
