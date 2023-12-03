import "./Footer.css"

export default function({author, year}) {
    return (<>
        <hr/>
        <footer>
            <p>Copyright © {year} {author}. All Rights Reserved.</p>
        </footer>
    </>)
}