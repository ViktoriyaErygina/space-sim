import {useLocation, useNavigate} from "react-router-dom";
import playerImg from '../content/Hero_Ship.png'
import meteoriteImg from '../content/Meteorite.png'
import heroShorImg from '../content/Hero_Shot.png'
import {CommonButton, GameArea, GameInfo, GameProcessPanel, Wrapper} from "./components/styles";
import {useRef, useState} from "react";

export default function GamePage() {
    const location = useLocation()
    const navigate = useNavigate()

    const data = location.state
    const [score, setScore] = useState(0)

    const timeObj = data.paramTime
    const minutes = String(timeObj.minutes).padStart(2, "0")
    const seconds = String(timeObj.seconds).padStart(2, "0")

    const handleGameOver = () => {
        navigate('/gameOver', {
                state: {
                    nameParam: data.paramName,
                    scoreParam: score
                }
            }
        )
    }

    const playerRef = useRef()

    const [state, setState] = useState({
        hero: {
            left: 0, top: 0, wasShot: false
        },
    })

    return (
        <div>
            <Wrapper>
                <GameArea>
                    <img src={playerImg} alt="player" ref={playerRef}
                         style={{
                             bottom: "20px",
                             left: "50%",
                             position: "absolute",
                             width: 60,
                             height: 100
                         }}/>
                    >

                    <img src={meteoriteImg} alt="meteorite"
                         style={{
                             left: "50%",
                             top: "20px",
                             position: "absolute",
                             width: 170,
                             height: 140
                         }}/>
                    >

                    <img src={heroShorImg} alt="hero-shot"
                         style={{
                             left: "50%",
                             bottom: "140px",
                             position: "absolute",
                             width: 15,
                             height: 45
                         }}/>
                    >
                </GameArea>

                <GameProcessPanel>
                    <GameInfo>Таймер: {minutes}:{seconds}</GameInfo>
                    <GameInfo>Баллы: {score}</GameInfo>
                    <GameInfo style={{
                        color: data.paramName === "tester" ? "#bc234b" : "#f0a03f"
                    }}>Имя: {data.paramName}</GameInfo>
                    <CommonButton style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                    }} onClick={handleGameOver}
                    >Выйти</CommonButton>
                </GameProcessPanel>
            </Wrapper>
        </div>
    )
}