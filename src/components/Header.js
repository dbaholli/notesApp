import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to ="/" className="navbar-brand">Notes Web App</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/Home.js" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/subscription" className="nav-link">Subscription</Link>
                </li>
            </ul>
        </Navbar>
    );
}
