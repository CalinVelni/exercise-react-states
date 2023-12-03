import "./Header.css"

export default function({title, changeLength, psw, pswGen}) {

    return (
        <header>
            <h2>{title}</h2>
            <input type="number" placeholder="Insert Password Length" onChange={changeLength}/>
            <button onClick={pswGen}>Generate</button>
            <p>{psw}</p>
        </header>
    )
}
