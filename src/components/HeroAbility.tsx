import React, { useEffect, useState, useMemo, useCallback } from "react";
import styled from "@emotion/styled";
import HeroAbilityItem from "./HeroAbilityItem";
import { useParams } from "react-router-dom";
import { Ability } from "../types/ability";
import service from "../utils/api";

const AbilityWrapper = styled.div`
  padding: 20px 14px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
`;

const AbilityList = styled.div`
  width: 50%;
`;

const AbilitySave = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
  .save-btn {
    margin-top: 10px;
  }
`;

const HeroAbility = () => {
  const { heroId } = useParams();
  const [initPoint, setInitPoint] = useState(0);
  const [remainPoint, setRemainPoint] = useState(0);
  const [heroAbility, setHeroAbility] = useState<Ability>({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  });

  const calcPoint = (obj: Ability) => {
    return Object.values(obj).reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  };
  const totalPoint = useMemo(() => {
    return calcPoint(heroAbility);
  }, [heroAbility]);

  const handlePoint = useCallback(
    (key: keyof Ability, type: string) => {
      if (type === "minus") {
        if (heroAbility[key] === 0) {
          alert("能力值不得低於0");
          return;
        }
        setRemainPoint((prev) => prev + 1);
      }
      if (type === "plus") {
        if (remainPoint === 0) {
          alert("點數已經用完囉！");
          return;
        }
        setRemainPoint((prev) => prev - 1);
      }
      setHeroAbility((prev) => {
        return {
          ...prev,
          [key]: type === "plus" ? prev[key]++ : prev[key]--,
        };
      });
    },
    [remainPoint, heroAbility]
  );

  const updatePoint = async() => {
    try {
        
    } catch (error) {
        
    }
  }

  const queryAbility = async () => {
    try {
      const result = await service.get<any, Ability>(
        `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
      );
      console.log("result===", result);
      setHeroAbility(result);
      const apiPoint = calcPoint(result);
      setInitPoint(apiPoint);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    queryAbility();
    console.log("id", heroId);
  }, [heroId]);

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
        <button className="save-btn">儲存</button>
      </AbilitySave>
    </AbilityWrapper>
  );
};

export default HeroAbility;
