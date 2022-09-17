import Main from './components/Main';
import React from "react";
import CreatePetPage from './components/CreatePetPage';
import Update from './components/Update';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Main />} />
          <Route exact path="/pets/:id/edit" element={<Update />} />
          <Route exact path="/pets/:id" element={<Detail />} />
          <Route exact path="/pets/new" element={<CreatePetPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
