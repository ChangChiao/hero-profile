import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";

const HeroCard = ({ name, image }: Hero) => {
  const Card = styled.div`
    width: 23%;
    text-align: center;
  `;
  return (
    <Card>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </Card>
  );
};

export default HeroCard;
