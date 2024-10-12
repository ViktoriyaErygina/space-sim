import {useEffect, useState} from "react";
import mateoriteImg from '../../content/Meteorite.png'


export default function MovingObject({delay}) {
    const [top, setTop] = useState(-50)
    const [left, setLeft] = useState(Math.random() * window.innerWidth)

    useEffect(() => {
        const moveObject = setInterval(() => {
            setTop(prevTop => prevTop + 1)
            if (top > window.innerHeight) {
                setTop(-50)
                setLeft(Math.random() * window.innerWidth)
            }
        }, 10)

        return () => clearInterval(moveObject)
    }, [top])

    return (
        <img src={mateoriteImg} alt={"meteorite"}
             style={{
                 position: 'absolute',
                 top: top,
                 left: left,
                 width: 100,
             }}
        />
    )
}