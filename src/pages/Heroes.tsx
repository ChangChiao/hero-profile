import React, { useEffect, useState } from "react";
import service from "../utils/api";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";
import { useParams } from "react-router-dom";
import HeroList from "../components/HeroList";
import HeroAbility from "../components/HeroAbility";
import { catchError } from "../utils/catchError";

export const Heroes = () => {
  const { heroId } = useParams();
  const [heroList, setHeroList] = useState<Hero[]>([]);

  const HeroAbilityBox = styled.div`
    height: 280px;
  `;

  const queryListData = async () => {
    const result = await service.get<any, Hero[]>(
      "https://hahow-recruit.herokuapp.com/heroes"
    );
    setHeroList(result);
  };

  useEffect(() => {
    catchError(queryListData);
  }, []);

  return (
    <>
      <HeroList heroList={heroList} />
      <HeroAbilityBox>{heroId && <HeroAbility />}</HeroAbilityBox>
    </>
  );
};
