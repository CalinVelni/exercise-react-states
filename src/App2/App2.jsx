import "./App2.css"
import { useState } from "react";
import { IoVolumeMute } from "react-icons/io5";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

const App = () => {

    const [volume, setVolume] = useState(50);

    const callBackChange = (e) => {
        setVolume(e.target.value)
    };

    const callBackMute = () => {
        setVolume(0)
    };

    return (<>
        <Slider
            title = {"Volume Slider"}
            volume = {volume}
            changeVolume = {callBackChange}
            muteVolume={callBackMute}
            btnIcon = {<IoVolumeMute/>}
        />
        <Footer
            author = {"Calin"}
            year = {2023}
        />          
    </>)
}

export default App