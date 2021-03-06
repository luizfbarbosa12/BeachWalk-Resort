import React, { Component } from "react";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./rooms-data";
import { setColor, setRem, media } from "../../styles";

export default class Rooms extends Component {
  state = {
    rooms: rooms,
  };
  render() {
    return (
      <div>
        <Section color={setColor.lightGrey}>
          <Title title="our rooms" center />
          <RoomsCenter>
            {this.state.rooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })}
          </RoomsCenter>
        </Section>
      </div>
    );
  }
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
  `};
  ${media.desktop`
   width: 100vw;
   max-width: 1170px;
  `};
  ${media.large`
  grid-template-columns: repeat(3, 1fr)
  `};
`;

// função de grid
// ${media.large`
//    width: 100vw;
//    max-width: 1170px;
//   `};
//   display: grid;
//   grid-template-columns: repeat(auto-fit, min-max(360px, 1fr));
//   grid-column-gap: ${setRem(45)};
