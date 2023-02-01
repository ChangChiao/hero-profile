import React, { useEffect, memo } from "react";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";
import HeroCard from "./HeroCard";
type HeroListProps = {
  heroList: Hero[];
};

const HeroList = ({ heroList }: HeroListProps) => {
  console.log("HeroList-render");

  const List = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  useEffect(() => {
    console.log("HeroList-mounted");
  }, []);

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
