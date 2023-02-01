import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";

const HeroCard = ({ name, image, id }: Hero) => {
  const Card = styled.div`
    width: 23%;
    text-align: center;
  `;
  return (
    <Card>
        <Link to={`/heroes/${id}`}>
            <img src={image} alt="" />
            <h3>{name}</h3>
        </Link>
    </Card>
  );
};

export default HeroCard;
