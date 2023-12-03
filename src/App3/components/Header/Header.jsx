import "./Header.css"

export default function({title, changeLength, psw, pswGen, btnText}) {

    return (
        <header>
            <h2>{title}</h2>
            <input type="number" placeholder="Insert Password Length" onChange={changeLength}/>
            <button onClick={pswGen}>{btnText}</button>
            <p>{psw}</p>
        </header>
    )
}
