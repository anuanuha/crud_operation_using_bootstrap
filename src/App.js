import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Create} from "./components/Create";
import {Read} from "./components/Read";
import {Update} from "./components/Update";
import {Home} from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read/:id' element={<Read/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
