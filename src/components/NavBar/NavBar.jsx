import "./NavBar.css";
import logoi from "../../assets/images/logoi.png";
import logo from "../../assets/images/logo.png";
import WhatsApp from "../../assets/images/WhatsApp.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
import Tiktok from "../../assets/images/Tiktok.png"
import Mail from "../../assets/images/Gmail.png"
import { Navbar, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";



const NavBar = () => {
    const [color, setColor] = useState(null);
    const handleClick = (item) => {
        setColor(item);
    };

    return (
        <>
        <div className="nav1">
                <Navbar expand="xl" className="logoT h-20">
                    <div className="containerRow">
                    <div className="logos">
                            <div className="colLogo1">
                                <div>
                                    <div>
                                        <Navbar.Brand href="#home">
                                            <Image
                                                src={logoi}
                                                width="30"
                                                height="30"
                                                className="lDog"
                                                alt="dog"
                                            />
                                        </Navbar.Brand>
                                    </div>
                                </div>
                            </div>
                            
                            <div  className="colLogo2">
                                <Navbar>
                                    <div>
                                        <Link to="/">
                                            <Image
                                                src={logo}
                                                width="30"
                                                height="30"
                                                className="logoN"
                                                alt="N"
                                            />
                                        </Link>
                                    </div>
                                </Navbar>
                            </div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                    </div>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        className="custom-offcanvas"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Menú
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="todo">
                            <div className="bloque">
                                <div className="navLink"><Link className="pNav" to="/" onClick={() => handleClick("inicio")}
                                style={{ color: color === "inicio" ? "#4F6C7C" : "black" }}>Inicio</Link></div>
                                <div className="navLink"><Link className="pNav" to="nosotras" onClick={() => handleClick("sobre")}
                                style={{ color: color === "sobre" ? "#4F6C7C" : "black" }}>Sobre Nosotras</Link></div>
                                <div className="navLink"><Link className="pNav" to="conocenos" onClick={() => handleClick("conocenos")}
                                style={{ color: color === "conocenos" ? "#4F6C7C" : "black" }}>Conócenos</Link></div>
                                <div className="navLink"><Link className="pNav"to="contactanos" onClick={() => handleClick("contactanos")}
                                style={{ color: color === "contactanos" ? "#4F6C7C" : "black" }}>Contáctanos</Link></div>
                            </div>
                            <div>
                                <div className="redesContainer">
                                    <ul>
                                        <li className="linkRedes">
                                            <a href="https://wa.me/541168057707">
                                                <img src={WhatsApp} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>WhatsApp</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="https://instagram.com/guarderia.elcountry?igshid=MmIzYWVlNDQ5Yg==">
                                                <img src={Instagram} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Instagram</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="https://www.facebook.com/profile.php?id=100089201654528&mibextid=LQQJ4d">
                                                <img src={Facebook} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Facebook</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="https://www.tiktok.com/@guarderiacaninaelcountry">
                                                <img src={Tiktok} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Tiktok</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="mailto: guarderia.elcountry@gmail.com">
                                                <img src={Mail} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Mail</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            
        </div>
            
        </>


    )
}

export default NavBar;
