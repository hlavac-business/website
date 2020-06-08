import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import "./styles.scss"

export default function Header() {
    return (
        <header data-aos="fade-down" data-aos-delay="1000">
            <div className="headerWrapper">
                <div>
                    <Link to="/" className="logo">
                        <img src="logo.svg" alt="Hlavac Business" />
                        Hlavac Business
                    </Link>
                </div>
                <div className="navigation">
                    <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/contact" activeClassName="active" exact>Contact</NavLink>
                </div>
            </div>
        </header>
    )
}
