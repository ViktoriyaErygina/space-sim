import {BlurBG, GameInfoInput, NameOfGame, CommonButton, StartPageInfoContainer, ErrorText} from "./components/styles";
import {useLocation, useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import TimePicker from "./components/TimePicker";

export default function StartPage() {
    const location = useLocation()
    const initName = location.state?.nameParam || ''
    console.log(initName)
    const [name, setName] = useState(initName)
    const [time, setTime] = useState('')
    const [showError, setShowError] = useState(false)
    const navigate = useNavigate()

    const handleNameChange = event => {
        setName(event.target.value)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleTimeChange = useCallback((time) => {
        const hours = time.hour
        const minutes = time.minute
        const convertedMinutes = parseInt(hours);
        const convertedSeconds = parseInt(minutes);
        const convertedTime = {minutes: convertedMinutes, seconds: convertedSeconds}
        setTime(convertedTime)
    })

    const handleClick = () => {
        if (checkIsEmpty()) {
            return setShowError(true)
        }

        let encryptedName
        if (name === "tester") {
            const abc = "abcdefghijklmnopqrstuvwxyz";
            let rs = "";
            while (rs.length < 6) {
                rs += abc[Math.floor(Math.random() * abc.length)];
            }
            encryptedName = rs
        } else {
            encryptedName = name
        }

        navigate('/gamePage', {
            state: {
                paramName: encryptedName,
                paramTime: time,
            }
        })
    }

    const checkIsEmpty = () => {
        return (!name || name.trim() === "") || !time
    }

    return (
        <div>
            <BlurBG/>
            <StartPageInfoContainer>
                <NameOfGame>Космический симулятор</NameOfGame>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <GameInfoInput
                        placeholder={"Имя"}
                        value={name}
                        onChange={handleNameChange}
                    />
                    <TimePicker onChange={handleTimeChange} />
                </div>
                {showError && <ErrorText>Введите имя и выберите время игры</ErrorText>}
                    <CommonButton onClick={handleClick}>
                        Начать игру
                    </CommonButton>
            </StartPageInfoContainer>
        </div>
    )
}
