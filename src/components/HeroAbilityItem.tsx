import React from "react";
import styled from "@emotion/styled";
import { Ability } from "../types/ability";
type AbilityItemProps = {
  name: keyof Ability;
  value: number;
  handlePoint: (key: keyof Ability, type: string) => void;
};

const HeroAbilityItem = ({ name, value, handlePoint }: AbilityItemProps) => {
  const AbilityItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  `;

  const AbilityBtn = styled.button`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <AbilityItem>
      <span>{name}</span>
      <AbilityBtn onClick={() => handlePoint(name, 'plus')}>+</AbilityBtn>
      <span>{value}</span>
      <AbilityBtn onClick={() => handlePoint(name, 'minus')}>-</AbilityBtn>
    </AbilityItem>
  );
};

export default HeroAbilityItem;
