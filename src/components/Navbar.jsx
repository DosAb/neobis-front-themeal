import { NavLink } from "react-router-dom"
import SearchNav from "./SearchNav"

function Navbar() {


    return (
        <header className="header">
            <NavLink to={"/"} >FOOD<span>zie</span></NavLink>
            <nav>
                <NavLink to="/books" >books</NavLink>
                <NavLink to="/category" >category</NavLink>
                <SearchNav />
                <NavLink to="/favorites" >favorites</NavLink>
            </nav>
        </header>
    )
}

export default Navbar