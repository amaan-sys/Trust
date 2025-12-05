import React from "react";
import AttorneyHero from "../../Components/Attorney/AttorneyHeroSection";
import AttorneyAdmin from "../../Components/Attorney/AttorneyAdmin";
import AttorneyContent from "../../Components/Attorney/AttorneyContent";
import AttorneyResponsibilities from "../../Components/Attorney/AttorneyResponsibilities";

export default function Attorney() {
  return (
    <div>
      <AttorneyHero />
      <AttorneyContent />
      <AttorneyResponsibilities />
      <AttorneyAdmin />
    </div>
  );
}