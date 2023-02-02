import React, { useEffect, memo } from "react";
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
    padding: 10px;
    background: rgba(0, 0, 0, .3);
    margin-bottom: 10px;
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

export default memo(HeroList);
