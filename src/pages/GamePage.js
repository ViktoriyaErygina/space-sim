import {useLocation, useNavigate} from "react-router-dom";
import {CommonButton, GameArea, GameInfo, GameProcessPanel, Wrapper} from "./components/styles";
import {useState} from "react";

export default function GamePage() {
    const location = useLocation()
    const navigate = useNavigate()

    const data = location.state
    const [score, setScore] = useState(0)

    const handleGameOver = () => {
        navigate('/gameOver', {
                state: {
                    nameParam: data.paramName,
                    scoreParam: score
                }
            }
        )
    }

    return (
        <div>
            <Wrapper>
                <GameArea />
                <GameProcessPanel>
                    <GameInfo>Таймер: {data.paramTime.minutes}:{data.paramTime.seconds}</GameInfo>
                    <GameInfo>Баллы: {score}</GameInfo>
                    <GameInfo>Имя: {data.paramName}</GameInfo>
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