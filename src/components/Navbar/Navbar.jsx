
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo2 from '../../assets/Images/logo2.png';
import { Link } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo2} alt="Logo Modas Chic" />
			<nav ref={navRef} className="responsive_nav">
				<Link to="/" onClick={showNavbar}>Inicio</Link>
				<Link to="/control-productos" onClick={showNavbar}>Control de productos</Link>
				{/* <a href="/#">Calendar</a> */}
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;