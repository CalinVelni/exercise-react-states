import { useState } from "react";
import "./Slider.css"

export default function({title, btnIcon}) {

    const [volume, setVolume] = useState("50");

    return (
        <header>
            <h2>{title}</h2>
            <div id="slider">
                <input type="range" min="0" max="100"  value={volume}
                    onChange={ e => setVolume(e.target.value)}/>
                <span>{volume}</span>                
            </div>
            <button onClick={() => setVolume(0)}>{btnIcon}</button>
        </header>
    )
}
