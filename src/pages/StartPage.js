import {BlurBG, GameInfoInput, NameOfGame, CommonButton} from "./components/styles";

export default function StartPage() {
    return (
        <div>
            <BlurBG/>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <NameOfGame>Космический симулятор</NameOfGame>
                <div style={{flexDirection: "row"}}>
                    <GameInfoInput/>
                    <GameInfoInput style={{label: "Таймер"}}/>
                </div>
                <CommonButton>Начать игру</CommonButton>
            </div>
        </div>
    )
}

