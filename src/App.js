import * as React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import Home from './Home';
import Detail from './Detail';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Wrapper = styled.div`
  height: 800px;
  background-color: #F3F7FB;
`

function App() {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
