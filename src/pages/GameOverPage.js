import {CommonButton, GameOverPanel, GameOverTitle, GameOverWrapper} from "./components/styles";
import {useLocation, useNavigate} from "react-router-dom";

export default function GameOverPage() {
    const location = useLocation()
    const name = location.state.nameParam
    const score = location.state.scoreParam
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/startPage', {
            state: {
                nameParam: name,
            }
        })
    }

    return (
        <div>
            <GameOverWrapper>
                <GameOverPanel>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <GameOverTitle style={{fontSize: "48px"}}>game over</GameOverTitle>
                        <GameOverTitle style={{fontSize: "28px"}}>Результат: {score}</GameOverTitle>
                        <CommonButton style={{
                            marginTop: "120px",
                        }} onClick={handleClick}>
                        Начать заново</CommonButton>
                    </div>
                </GameOverPanel>
            </GameOverWrapper>
        </div>
    )
}