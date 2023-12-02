import "./Navbar.css"

export default function(props) {

    const {
            logoIcon,
            siteNameP1,
            separator,
            siteNameP2,
            changeTime,
            btnIcon,
        } = props

    return (<>
    
        <nav>
            <div id="logoAndName">
                <figure>{logoIcon}</figure>
                <p>{siteNameP1} <span>{separator}</span> {siteNameP2}</p>                
            </div>
            <menu>
                <li onClick={changeTime}>{btnIcon}</li>
            </menu>
        </nav>
        <hr/>
    </>)
}
