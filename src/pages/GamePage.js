import {useLocation, useNavigate} from "react-router-dom";
import playerImg from '../content/Hero_Ship.png'
import meteoriteImg from '../content/Meteorite.png'
import heroShorImg from '../content/Hero_Shot.png'
import {CommonButton, GameArea, GameInfo, GameProcessPanel, Wrapper} from "./components/styles";
import {CSSTransition} from 'react-transition-group';
import React, {useEffect, useRef, useState} from "react";


let countOfKilledEnemies = 0;
export default function GamePage() {
    const location = useLocation()
    const navigate = useNavigate()

    const [pageWidth, setPageWidth] = useState(0)
    const [pageHeight, setPageHeight] = useState(0)

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

    const fieldRef = useRef(null)
    const playerRef = useRef()
    const idIntervalEnemyGen = useRef()
    const idIntervalEnemyUpd = useRef()

    const playerWidth = 60
    const playerHeight = 100

    const meteoriteWidth = 170
    const meteoriteHeight = 140

    const [state, setState] = useState({
        meteorites: [],
        hero: {
            left: 0, top: 0, wasShot: false
        },
    })

    useEffect(() => {
        if (fieldRef.current) {
            setPageWidth(fieldRef.current.clientWidth);
            setPageHeight(fieldRef.current.clientHeight);
        }
    }, [])

    useEffect(() => {
        setState(prevState => {
                let {hero} = prevState;
                hero = {
                    left: (pageWidth - playerWidth) / 2,
                    top: pageHeight - 2 * playerHeight,
                    wasShot: false
                };
            return {...prevState, hero: hero};
            }
        )
        startIntervals()
    }, [])

    const generateMeteorite = () => {
        setState(prevState => {
                let x = getRandomInt(pageWidth - meteoriteWidth)

                if (!(prevState.meteorites.filter(meteorite =>
                    meteorite.alive &&
                    Math.abs(meteorite.left - x) <= meteoriteWidth &&
                    meteorite.top < meteoriteHeight).length > 0)
                ) {
                    console.log(x)
                    let y = -meteoriteHeight
                    let {meteorites} = prevState
                    let speed = 0.5, livesCount = 1

                    meteorites.push({left: x, top: y, alive: true, speed: speed, livesCount: livesCount})
                    return {...prevState, meteorites: meteorites}
                } else {
                    return {...prevState}
                }
            }
        )
    }

    function startIntervals() {
        idIntervalEnemyGen.current = setInterval(() => {
            generateMeteorite()
        }, 3500)

        idIntervalEnemyUpd.current = setInterval(() => {
            randomMoveEnemies();
        }, 800)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const randomMoveEnemies = () => {
        setState((prevState) => {
            let { health } = prevState;
            let { gameOver } = prevState;
            let { lives } = prevState;

            let newEnemies = prevState.meteorites.map((meteorite) => {
                if (getRandomInt(10) < 6) {
                    let start = Date.now();
                    let timer = setInterval(() => {
                        let timePassed = Date.now() - start;
                        if (timePassed >= 3500) {
                            clearInterval(timer);
                            return;
                        }
                        meteorite.top += meteorite.speed;
                    }, 20);


                    if (Math.abs(meteorite.top - prevState.hero.top) <= meteoriteHeight &&
                        Math.abs(meteorite.left - prevState.hero.left) <= meteoriteWidth && meteorite.alive) {
                        meteorite.alive = false;
                        countOfKilledEnemies++;
                        health -= 20;
                    }
                    if (health <= 0 && lives >= 1) {
                        lives--;
                        health = 100;
                    }
                    if (lives === 0 || (meteorite.alive && meteorite.top >= pageHeight - meteoriteHeight)) {
                        health = 0;
                        gameOver = true;
                    }

                    return meteorite;
                }
                else {
                    if (Math.abs(meteorite.top - prevState.hero.top) <= meteoriteHeight &&
                        Math.abs(meteorite.left - prevState.hero.left) <= meteoriteWidth && meteorite.alive) {
                        meteorite.alive = false;
                        countOfKilledEnemies++;
                        health -= 20;
                    } return meteorite
                }
            })



            let aliveEnemies = newEnemies.filter((enemy) =>
                    enemy.top < pageHeight + meteoriteHeight
                // && enemy.alive
            )
            return { ...prevState, health: health, gameOver: gameOver, enemies: aliveEnemies, lives: lives };
        });
    }


    function renderMeteorites() {
        return (
            state.meteorites.map((meteorite) => {
                return (
                    <CSSTransition in={true} timeout={1500} classNames="enshot">
                        <img src={meteoriteImg} alt="enemy" style={{ position: "absolute", left: `${meteorite.left}px`, top: `${meteorite.top}px`, width: `${meteoriteWidth}px`, height: `${meteoriteHeight}px` }} />
                    </CSSTransition>)
            })
        )
    }

    return (
        <div>
            <Wrapper>
                <GameArea className="game-area">
                    <img src={playerImg} alt="player" ref={playerRef}
                         style={{
                             bottom: "20px",
                             left: "50%",
                             position: "absolute",
                             width: playerWidth,
                             height: playerHeight
                         }}/>
                    >

                    {renderMeteorites()}

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
                    <GameInfo>Таймер: {data.paramTime.minutes}:{data.paramTime.seconds}</GameInfo>
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