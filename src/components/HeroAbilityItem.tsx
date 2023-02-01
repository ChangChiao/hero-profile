import React from "react";
import styled from "@emotion/styled";

type AbilityItemProps = {
  name: string;
  value: number;
};

const HeroAbilityItem = ({ name, value }: AbilityItemProps) => {
  const AbilityItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  `;

  const AbilityBtn = styled.button`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <AbilityItem>
      <span>{name}</span>
      <AbilityBtn>+</AbilityBtn>
      <span>{value}</span>
      <AbilityBtn>-</AbilityBtn>
    </AbilityItem>
  );
};

export default HeroAbilityItem;
