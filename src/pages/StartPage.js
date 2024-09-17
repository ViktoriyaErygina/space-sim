import {Component} from "react";
import PageHeader from "./components/PageHeader";
import {BlurBG, LevelAndBtn, NameOfGame, StartButton} from "./components/styles";

class StartPage extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/*<PageHeader />*/}
                {/*<BlurBG />*/}
                {/*<LevelAndBtn />*/}
                <NameOfGame>Космический симулятор</NameOfGame>
                <StartButton>Старт!</StartButton>
            </div>
        )
    }
}

export default StartPage;