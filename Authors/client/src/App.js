import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Update from "./views/Update";
import CreateAuthor from "./views/CreateAuthor";
import "./bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/author/:id/edit" element={<Update />} />
          <Route exact path="/author/new" element={<CreateAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
