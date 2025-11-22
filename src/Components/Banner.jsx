import React from "react";
import North from "../assets/North.jpg";
import East from "../assets/East.jpg";
import American from "../assets/American.jpg";
import Council from "../assets/Council.jpg";
import Bankers from "../assets/Bankers.jpg";
import BBB from "../assets/BBB.png";

const Banner = () => {
  return (
    <div className="w-full bg-white py-12 px-8 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-nowrap min-w-max md:min-w-full">
          {/* Logo 1 - Northwest Family Business Advisors */}
          <div className="flex items-center justify-center h-20">
            <img
              src={North}
              alt="Northwest Family Business Advisors"
              className="max-h-20 object-contain"
            />
          </div>

          {/* Logo 2 - East King County */}
          <div className="flex items-center justify-center h-20">
            <img
              src={East}
              alt="East King County State Planning Council"
              className="max-h-20 object-contain"
            />
          </div>

          {/* Logo 3 - AADMM */}
          <div className="flex items-center justify-center h-20">
            <img
              src={American}
              alt="American Association of Daily Money Managers"
              className="max-h-20 object-contain"
            />
          </div>

          {/* Logo 4 - EPC */}
          <div className="flex items-center justify-center h-20">
            <img
              src={Council}
              alt="Estate Planning Council of Seattle"
              className="max-h-20 object-contain"
            />
          </div>

          {/* Logo 5 - ABA */}
          <div className="flex items-center justify-center h-20">
            <img
              src={Bankers}
              alt="American Bankers Association"
              className="max-h-20 object-contain"
            />
          </div>

          {/* Logo 6 - BBB Rating */}
          <div className="flex items-center justify-center h-20">
            <img
              src={BBB}
              alt="BBB Rating A+ Accredited Business"
              className="max-h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
