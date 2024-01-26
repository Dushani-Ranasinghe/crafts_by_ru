import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import "./header.css";
import Logo from "../../assets/logo.png"

function Header({ showHomeLink }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [Toggle, showMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header) {
                if (window.scrollY >= 80) {
                    header.classList.add("scroll_header");
                    setIsScrolled(true);
                } else {
                    header.classList.remove("scroll_header");
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`header ${isScrolled ? "scroll_header" : ""}`}>
                <nav className='nav container'>
                    {showHomeLink && (
                        <ScrollLink to='home' spy={true} smooth={true} offset={-70} duration={500} className='nav_logo'>
                            <img src={Logo} width="100px" alt='logo'/>
                        </ScrollLink>
                    )}

                    <ScrollLink to='home' spy={true} smooth={true} offset={-70} duration={500} className='nav_logo'>
                    <img src={Logo} width="100px" alt='logo'/>
                    </ScrollLink>

                    <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                        <ul className='nav_list'>
                            <li className='nav_item'>
                                <ScrollLink to='home' spy={true} smooth={true} offset={-70} duration={500} className="nav_link">
                                    <i className='uil uil-estate nav_icon'></i>
                                    Home
                                </ScrollLink>
                            </li>
                            <li className='nav_item'>
                                <ScrollLink to='about' spy={true} smooth={true} offset={-70} duration={500} className="nav_link">
                                    <i className='uil uil-user nav_icon'></i>
                                    About
                                </ScrollLink>
                            </li>
                            <li className='nav_item'>
                                <ScrollLink to='services' spy={true} smooth={true} offset={-70} duration={500} className="nav_link">
                                    <i className='uil uil-briefcase-alt nav_icon'></i>
                                    Services
                                </ScrollLink>
                            </li>
                            <li className='nav_item'>
                                <ScrollLink to='contact' spy={true} smooth={true} offset={-70} duration={500} className="nav_link">
                                    <i className='uil uil-message nav_icon'></i>
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>

                        <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
                    </div>

                    <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
                        <i className='uil uil-apps'></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
