import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
