import React from "react";
import MediumClap from "../Components/Clap";
import ShowcaseContainer from "../Containers/ShowcaseContainer";
import ClapPageTemplate from "../Components/ClapBodyTemplate/ClapPageTemplate";

const BasePage = () => {
  return (
    <ClapPageTemplate
      title={"Base page"}
      description={"This is the base page, all the patterns are based on this page"}
    >
      <MediumClap />
    </ClapPageTemplate>
  );
};

export default BasePage;
