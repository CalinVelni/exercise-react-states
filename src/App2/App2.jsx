import "./App2.css"
import { IoVolumeMute } from "react-icons/io5";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

const App = () => {

    return (<>
        <Slider
            title = {"Volume Slider"}
            btnIcon = {<IoVolumeMute/>}
        />
        <Footer
            author = {"Calin"}
            year = {2023}
        />          
    </>)
}

export default App