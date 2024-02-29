import "../styles/Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/login">Login/Sign up</Link>
    </nav>
  )
}

export default Header