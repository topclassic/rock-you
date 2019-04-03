import React from "react";
import styled from "styled-components";

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalContainer = props => {
  const { children } = props;
  return <Main>{children}</Main>;
};

export default CalContainer;
