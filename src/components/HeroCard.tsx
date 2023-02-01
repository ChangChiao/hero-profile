import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";

const HeroCard = ({ name, image, id }: Hero) => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const Card = styled.div`
    width: 23%;
    text-align: center;
    cursor: pointer;
    padding: 4px;
    margin-bottom: 4px;
    background: ${heroId === id? 'rgba(37, 150, 190, .5);' : 'rgba(0, 0, 0, .5);'}   
    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
    }
    img {
        width: 98%;
        min-width: 187px;
    }
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
