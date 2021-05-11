import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to beackwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
      libero at metus iaculis pulvinar. unt molestie."
      >
        <PrimaryBtn t="1rem">View Details</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://www.google.com" t="1rem"> */}
        {/* podemos usar a prop "as" para indicar outra tag html que essa ira se tornar. */}
      </Banner>
    </Hero>
  );
};

export default Header;
