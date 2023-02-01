import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import HeroAbilityItem from "./HeroAbilityItem";
import { useParams } from "react-router-dom";
import { Ability } from "../types/ability";
import service from "../utils/api";

const AbilityWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const AbilityList = styled.div`
  width: 50%;
`;

const AbilitySave = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
`;

const HeroAbility = () => {
  const { heroId } = useParams();
  const [heroAbility, setHeroAbility] = useState<Ability>({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  });

  const queryAbility = async () => {
    try {
      const result = await service.get<any, Ability>(
        `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
      );
      console.log("result===", result);

      setHeroAbility(result);
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
            <HeroAbilityItem key={item} name={item} value={heroAbility[item]} />
          )
        )}
      </AbilityList>
      <AbilitySave>
        <div>
          剩餘點數：
          <span>0</span>
        </div>
        <button>儲存</button>
      </AbilitySave>
    </AbilityWrapper>
  );
};

export default HeroAbility;
