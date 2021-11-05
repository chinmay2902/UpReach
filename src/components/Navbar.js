import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark " id="navbar">

                    <Link className="navbar-brand  text-light" to="/">UpReach</Link>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link className="nav-link text-light" to="/general">General</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-light" to="/business">Business</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-light" to="/health">Health</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-light" to="/science">Science</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-light" to="/technology">Technology</Link></li>
                            

                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About Us</Link>
                            </li>
                        </ul>

                    </div>




                </nav>




            </>

        )
    }
}
