import "./Main.css"

export default function({title, article}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{article}</p>    
        </article>
    )
}