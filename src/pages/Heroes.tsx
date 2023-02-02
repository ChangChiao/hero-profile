import React, { useEffect, useState, useCallback } from "react";
import service from "../utils/api";
import styled from "@emotion/styled";
import { Hero } from "../types/hero";
import { Ability } from "../types/ability";
import { useParams } from "react-router-dom";
import HeroList from "../components/HeroList";
import HeroAbility from "../components/HeroAbility";
import { catchError } from "../utils/catchError";
import { useLoadingContext } from "../contexts/useLoadingContext";
import Loading from "../components/Loading";
export const Heroes = () => {
  const { isShowLoading, setLoading } = useLoadingContext();
  const { heroId } = useParams();
  const [heroList, setHeroList] = useState<Hero[]>([]);
  const [heroAbility, setHeroAbility] = useState<Ability>({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  });
  const HeroAbilityBox = styled.div`
    height: 280px;
  `;

  const queryListData = async () => {
    setLoading(true)
    const result = await service.get<any, Hero[]>(
      "https://hahow-recruit.herokuapp.com/heroes"
    );
    setLoading(false)
    setHeroList(result);
  };

  const queryAbility = useCallback(async () => {
    setLoading(true)
    const result = await service.get<any, Ability>(
      `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
    );
    setLoading(false);
    setHeroAbility(result);
  }, [heroId]);

  useEffect(() => {
    catchError(queryListData);
  }, []);

  useEffect(() => {
    catchError(queryAbility);
    console.log("id", heroId);
  }, [heroId]);

  return (
    <>
      <HeroList heroList={heroList} />
      <HeroAbilityBox>
        {heroId && (
          <HeroAbility
            heroAbility={heroAbility}
            setHeroAbility={setHeroAbility}
            queryAbility={queryAbility}
          />
        )}
      </HeroAbilityBox>
      {isShowLoading && <Loading />}
    </>
  );
};
