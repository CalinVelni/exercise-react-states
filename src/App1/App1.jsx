import "./App1.css"
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon, FaPowerOff } from "react-icons/fa6";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {

    const [time, setTime] = useState("day");

    const callBackTime = () => {
        time === "day" ? setTime("night") : setTime("day");
    }

    return (<>
        {
            document.body.setAttribute('class', `${time}`)
        }
        <Navbar
            logoIcon = {time === "day" ? <FaSun/> : <FaMoon/>}
            siteNameP1 = "Day"
            separator = "&"
            siteNameP2 = "Night"
            btnIcon = {<FaPowerOff/>}
            changeTime = {callBackTime}
        />
        <Header
            jumboText = {"Read your favourite articles whenever you want, with the perfect color theme"}
        />
        <Main
            title = {"How to use React like a pro"}
            article = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius ut libero obcaecati quam asperiores eum recusandae nemo quo ducimus temporibus alias voluptate facere placeat sunt minima, cumque magni vero saepe rerum nihil minus. Soluta cupiditate fugit, consectetur totam itaque dolore officiis ullam ab. Reprehenderit quos voluptate quisquam eligendi earum nihil ea aliquid iusto alias. Earum consequatur aspernatur magnam sint iusto blanditiis eveniet, maiores quam iste et cumque possimus repudiandae porro molestiae officia totam velit recusandae laudantium distinctio neque. Incidunt molestiae, harum cum, modi voluptates sapiente quae vel repudiandae distinctio magnam odio eos ipsam. Atque ab magni dignissimos odio veritatis assumenda iure impedit et eveniet architecto molestias consectetur nihil cupiditate eum, maxime, eaque fuga porro id error cumque iusto consequatur deleniti vel harum. Labore id deleniti possimus quod est voluptas fugit magni commodi quisquam provident sunt repudiandae ea mollitia ab, ullam voluptate earum quibusdam dolorem neque suscipit! Cupiditate dolorum beatae autem inventore molestiae illum ea quaerat labore suscipit, hic veritatis sit! Laboriosam tempore adipisci optio ab esse fugiat reprehenderit beatae accusamus totam officia, nesciunt provident ullam similique aliquid quam consequatur deleniti, corrupti quis veniam. Fugit minus voluptatibus vel cupiditate ipsa eum cum adipisci velit voluptas ab rem, cumque, fugiat nobis!"}
        />
        <Footer
            author = {"Calin"}
            year = {2023}
        />          
    </>)
}

export default App