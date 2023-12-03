import "./Slider.css"

export default function({title, volume, changeVolume, muteVolume}) {

    return (
        <header>
            <h2>{title}</h2>
            <div id="slider">
                <input type="range" min="0" max="100"  value={volume}
                    onChange={changeVolume}/>
                <span>{volume}</span>                
            </div>
            <button onClick={muteVolume}>Mute</button>
        </header>
    )
}
