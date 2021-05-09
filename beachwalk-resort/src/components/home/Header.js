import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to beackwalk resort"
        text="LLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
      libero at metus iaculis pulvinar. Nullam sed felis ante. Etiam non
      interdum neque. Morbi ultricies rutrum justo, et ornare libero bibendum
      sed. Proin dapibus dui in efficitur vehicula. Aenean tincidunt molestie."
      />
    </Hero>
  );
};

export default Header;
