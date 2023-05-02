import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Level1 from "./components/pages/level1"
import Level2 from "./components/pages/level2"
import Level3 from "./components/pages/level3"
import Level4 from "./components/pages/level4"
import Level5 from "./components/pages/level5"
import Level6 from "./components/pages/level6"
import Level7 from "./components/pages/level7"
import Level8 from "./components/pages/level8"
import Level9 from "./components/pages/level9"
import Level10 from "./components/pages/level10"
import Score from './components/pages/score';
import Analysis from './components/pages/analysis';
import GameOver from './components/pages/game_over';

import "./styles.css";
import Login from './components/login';
import Logout from './components/logout';
import Signup from './components/sign-up';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/level1" element={<Level1/>} />
        <Route path="/level2" element={<Level2/>} />
        <Route path="/level3" element={<Level3/>} />
        <Route path="/level4" element={<Level4/>} />
        <Route path="/level5" element={<Level5/>} />
        <Route path="/level6" element={<Level6/>} />
        <Route path="/level7" element={<Level7/>} />
        <Route path="/level8" element={<Level8/>} />
        <Route path="/level9" element={<Level9/>} />
        <Route path="/level10" element={<Level10/>} />
        <Route path="/score" element={<Score/>} />
        <Route path="/analysis" element={<Analysis/>} />
        <Route path="/game-over" element={<GameOver/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  );
}