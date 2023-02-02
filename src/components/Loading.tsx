import React from "react";
import styled from "@emotion/styled";

const Loading = () => {
  const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; 
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    font-size: 20px;
  `;
  return (
    <LoadingWrapper>
      <div>Loading...</div>
    </LoadingWrapper>
  );
};

export default Loading;
