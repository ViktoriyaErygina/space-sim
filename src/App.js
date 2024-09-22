import './App.css';
import GameOverPage from "./pages/GameOverPage";
import StartPage from "./pages/StartPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GamePage from "./pages/GamePage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<StartPage />}/>
                <Route path='/startPage' element={<StartPage />}/>
                <Route path='/gamePage' element={<GamePage />}/>
                <Route path='/gameOver' element={<GameOverPage />}/>
            </Routes>
        </BrowserRouter>
    );
}
