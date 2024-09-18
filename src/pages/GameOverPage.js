import {CommonButton, GameOverPanel, GameOverTitle, GameOverWrapper} from "./components/styles";

export default function GameOverPage() {
    return (
        <div>
            <GameOverWrapper>
                <GameOverPanel>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <GameOverTitle style={{fontSize: "48px"}}>game over</GameOverTitle>
                        <GameOverTitle style={{fontSize: "28px"}}>Результат: </GameOverTitle>
                        <CommonButton style={{
                            marginTop: "120px",
                        }}
                        >Начать заново</CommonButton>
                    </div>
                </GameOverPanel>
            </GameOverWrapper>
        </div>
    )
}