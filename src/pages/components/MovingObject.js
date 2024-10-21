import {useEffect, useRef, useState} from "react";
import mateoriteImg from '../../content/Meteorite.png'

export default function MovingObject() {
    const [top, setTop] = useState()
    const [left, setLeft] = useState()
    const angleRef = useRef((Math.random() * 180) * Math.PI / 180);
    const timeRef = useRef(0);
    const initLeft = useRef(Math.random() * window.innerWidth);

    useEffect(() => {
        const moveObject = setInterval(() => {
            setTop(Math.sin(angleRef.current) * timeRef.current - 100);
            setLeft(initLeft.current + Math.cos(angleRef.current) * timeRef.current);
            timeRef.current += 1

            if (top > window.innerHeight || left > window.innerWidth) {
                timeRef.current = 0;
                angleRef.current = (Math.random() * 180) * Math.PI / 180;
                initLeft.current = Math.random() * window.innerWidth;
            }
        }, 14)

        return () => clearInterval(moveObject)
    }, [top, left])

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