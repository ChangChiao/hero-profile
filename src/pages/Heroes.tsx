import React, { useEffect, useState } from "react";
import service from "../utils/api";
import { Hero } from "../types/hero";
import { useParams } from "react-router-dom";
import { Ability } from "../types/ability";
import HeroList from "../components/HeroList";
import HeroAbility from "../components/HeroAbility";
import { catchError } from "../utils/catchError";

export const Heroes = () => {
  const { heroId } = useParams();
  const [heroList, setHeroList] = useState<Hero[]>([]);

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
    <div>
      <HeroList heroList={heroList} />
      {heroId && <HeroAbility />}
    </div>
  );
};
