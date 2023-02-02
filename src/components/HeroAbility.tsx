import React, { useEffect, useState, memo, useCallback } from "react";
import styled from "@emotion/styled";
import HeroAbilityItem from "./HeroAbilityItem";
import { useParams } from "react-router-dom";

import service from "../utils/api";
import { catchError } from "../utils/catchError";
import { useLoadingContext } from "../contexts/useLoadingContext";
import { Ability } from "../types/ability";
const AbilityWrapper = styled.div`
  padding: 20px 14px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AbilityList = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AbilitySave = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
  }
  .save-btn {
    margin-top: 10px;
  }
`;

type HeroAbilityProps = {
  heroAbility: Ability;
  setHeroAbility: (param: any) => void;
  queryAbility: () => void;
  remainPoint: number;
  setRemainPoint: (point: any) => void;
};

const HeroAbility = ({
  heroAbility,
  setHeroAbility,
  queryAbility,
  remainPoint,
  setRemainPoint
}: HeroAbilityProps) => {
  const { heroId } = useParams();
  const { setLoading } = useLoadingContext();

  const handlePoint = useCallback(
    (key: keyof Ability, type: string) => {
      if (type === "minus") {
        if (heroAbility[key] <= 0) {
          alert("能力值不得低於0");
          return;
        }        
        setRemainPoint((prev: number) => prev + 1);
      }
      if (type === "plus") {
        if (remainPoint === 0) {
          alert("點數已經用完囉！");
          return;
        }
        setRemainPoint((prev: number) => prev - 1);
      }

      setHeroAbility((prev: Ability) => {
        return {
          ...prev,
          [key]: type === "plus" ? ++prev[key] : --prev[key],
        };
      });
    },
    [remainPoint, heroAbility]
  );

  const updatePoint = async () => {
    if (remainPoint > 0) {
      alert("點數還沒用完喔！");
      return;
    }
    setLoading(true)
    await service.patch<Ability, any>(
      `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
      {
        ...heroAbility,
      }
    );
    alert("儲存成功！")
    setLoading(false);
    catchError(queryAbility);
  };


  useEffect(() => {
    console.log('remainPoint', remainPoint)
  }, [remainPoint])

  return (
    <AbilityWrapper>
      <AbilityList>
        {(Object.keys(heroAbility) as Array<keyof typeof heroAbility>).map(
          (item) => (
            <HeroAbilityItem
              key={item}
              name={item}
              handlePoint={handlePoint}
              value={heroAbility[item]}
            />
          )
        )}
      </AbilityList>
      <AbilitySave>
        <div>
          剩餘點數：
          <span>{remainPoint}</span>
        </div>
        <button className="save-btn" onClick={updatePoint}>
          儲存
        </button>
      </AbilitySave>
    </AbilityWrapper>
  );
};

export default memo(HeroAbility);
