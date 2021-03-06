import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Gavin Shrestha</Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/resume">Resume</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/todo">Todo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/tobecontinued">TBC</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default navbar;