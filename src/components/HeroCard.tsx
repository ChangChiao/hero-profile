import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";

const HeroCard = ({ name, image, id }: Hero) => {
  const navigate = useNavigate();
  const Card = styled.div`
    width: 23%;
    text-align: center;
  `;
  const handleClick = (id: string) => {
    navigate(`/heroes/${id}`);
  };
  return (
    <Card onClick={() => handleClick(id)}>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </Card>
  );
};

export default HeroCard;
