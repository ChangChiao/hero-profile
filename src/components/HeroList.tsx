import React from "react";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";
import HeroCard from "./HeroCard";
type HeroListProps = {
  heroList: Hero[];
};

const HeroList = ({ heroList }: HeroListProps) => {
  const List = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
       flex-direction: column;
    }
  `;
  if (heroList.length === 0) {
    return <div>暫無資料</div>;
  }
  return (
    <List>
      {heroList.map((item) => (
        <HeroCard key={item.id} {...item} />
      ))}
    </List>
  );
};

export default HeroList;
