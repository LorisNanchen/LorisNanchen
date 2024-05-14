import "../App.css"
import logo from "../assets/1.png"

export default function Header() {

    return(
        <div className="Header">
            <img className="logo" id="logotop" src={logo}></img>
        </div>
    )
}