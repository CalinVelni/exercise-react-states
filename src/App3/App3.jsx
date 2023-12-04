import "./App3.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import randomInt from 'random-int';

const App = () => {

    const [length, setLength] = useState(0);
    
    const [password, setPassword] = useState('');

    const UpOrLow = text => randomInt(1) ? text.toLowerCase() : text.toUpperCase(); 

    const callBackChangeLength = (e) => {
        setLength(e.target.valueAsNumber);
    }

    const callBackPswGen = () => {
        const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let rndPsw = "";
        for(let i = 0; i < length; i ++) {
            rndPsw += UpOrLow( chars[ randomInt(chars.length -1) ] );
        }
        setPassword(rndPsw);
    };

    return (<>
        <Header
            title = {"Password Generator"}
            changeLength = {callBackChangeLength}
            psw = {password}
            pswGen = {callBackPswGen}
            btnText = "Generate"
        />
        <Footer
            author = {"Calin"}
            year = {2023}
        />          
    </>)
}

export default App