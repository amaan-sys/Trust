import React from "react";
import EstateHeroTop from "../../Components/Estate/EstateHeroTop";
import EstateResponsibilities from "../../Components/Estate/EstateResponsibilities";
import EstateAdmin from "../../Components/Estate/EstateAdmin";
export default function Estate() {
  return (
    <div className="w-full bg-white">
      <EstateHeroTop />
      <EstateResponsibilities />
      <EstateAdmin />
    </div>
  );
}
