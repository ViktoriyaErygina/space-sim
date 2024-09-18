import bg from '../content/Game_Field_Background.png'
import styled from 'styled-components'

/**
 * Стили для экрана начала игры
 */
export const NameOfGame = styled.p`
    font-size: 48px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    margin: 0;
    color: #f0a03f;
    margin-top: 50%;
`

export const CommonButton = styled.button`
    cursor: pointer;
    color: #f0a03f;
    background-color: #241400;
    font-size: 20px;
    font-family: Courier New, Courier, monospace;
    font-weight: 600;
    border-radius: 12px;
    padding: 7px 15px;
    border: 3px solid #f0a03f;
`


export const BlurBG = styled.div`
    filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${bg})
`

export const GameInfoInput = styled.input`
    margin: 50px 15px 50px 15px;
    background-color: #241400;
    border: 3px solid #f0a03f;
    border-radius: 12px;
    padding: 10px 15px;
    color: #f0a03f;
`

/**
 * Стили для самой игры
 */
export const Panel = styled.div`
    width: 27%;
    min-height: 100%;
    background-color: #044972;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 100%;
        min-height: fit-content;
        height: max-content;
        flex-direction: row;
    }
`

export const GameArea = styled.div`
    position: relative;
    overflow: hidden;
    background-image: url(${bg});
    margin-top: 30px;
    width: 73%;
    height: calc(100% - 30px);
    background-size: cover;
    @media (max-width: 800px) {
        width: 100%;
    }
`


/**
 * Стили для экрана окончания игры
 */
export const GameOverWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100vh;
    min-wight: 350px;
    background-image: url(${bg})
`

export const GameOverPanel = styled.div`
    background-color: #241400;
    min-height: fit-content;
    height: 50%;
    width: 500px;
    margin: 20px 0;
    color: #faa742;
    font-family: Courier New, Courier, monospace;
    padding: 30px 25px;
    border-radius: 15px;
    border: 3px solid #db9948;
`
export const GameOverForm = styled.form`
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const GameOverParagraph = styled.p`
    font-weight: 600;
    margin-bottom: 20px;
    @media (max-width: 500px) {
        text-align: center
    }
`
export const GameOverTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 60px;
    font-weight: 600
`

export const ContinueButton = styled.input`
    background-color: transparent;
    border: 3px solid #db9948;
    border-radius: 12px;
    padding: 7px 10px;
    color: #f0a03f;
    margin: 30px 0;
`