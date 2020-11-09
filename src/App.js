import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";

function App() {
  return (
    <>
      <Main>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
          <p>AnhaR_1119101712</p>
        </FooterInner>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  background-color: #99ccff;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
  background-color: #00f829;
`;

const FooterInner = styled.div`
  padding: 16px 0;
`;
export default App;
