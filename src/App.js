import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Detail from './Detail';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/detail/:id" component={Detail} /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes> */}
    </div>
  );
}

export default App;
