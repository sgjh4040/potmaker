import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import logo from './logo.svg';
import './App.css';
import Main from './Routes/Main/main';

const Wrapper = styled.div`
  position: relative;
  margin: 40px auto;
  width: 100%;
  /* max-width: ${props => props.theme.maxWidth}; */
`;

function App() {
  return (
    <Wrapper>
      <Router>
      <Route exact={true} path={"/"} component={Main} />
      </Router>
    </Wrapper>
  );
}

export default App;
