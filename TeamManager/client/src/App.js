import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayerList from './components/PlayerList';
import CreatePlayerPage from './components/CreatePlayerPage';
import Main from "./components/Main";
import './bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route exact path="/players/new" element={ <CreatePlayerPage /> } />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
