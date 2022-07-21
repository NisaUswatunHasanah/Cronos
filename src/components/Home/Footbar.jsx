import React from 'react'
import "./Footbar.css"
import Logo from "../../Assets/cronos.png"

export default function Footbar() {
    return (
        <footer className="foot">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <span className="brand">
                           
                        <img className="logo" src={Logo} alt=""/>
                        </span>
                        <br/>
                        <br/>
                        <p className="brand-tagline font weight-light">
                        Helping ambitious entrepreneurs improve their business skills & 
transition to top data driven
enterprise systems
                        </p>
                    </div>
                    <div className="col-3 mr-5">
                        <h5 className="mt-2 text-light">
                            About
                        </h5>
                        {/* <ul className="list-group list-group-flush"> */}
                            <li className="list-group-item">
                                About Us
                            </li>
                            <li className="list-group-item">
                                Contact Us
                            </li>
                            <li className="list-group-item">
                                Term of Us
                            </li>
                            <li className="list-group-item">
                                Refund Policy
                            </li>
                            <li className="list-group-item">
                                Privacy Policy
                            </li>
                        {/* </ul> */}
                    </div>
                    <div className="col-3 mr-5">
                        <h5 className="mt-2 text-light">
                            Usefull Links
                        </h5>
                        {/* <ul className="list-group list-group-flush"> */}
                            <li className="list-group-item">
                                Instagram
                            </li>
                            <li className="list-group-item">
                                Facebook
                            </li>
                            <li className="list-group-item">
                                    Linkdin
                            </li>
                            <li className="list-group-item">
                             Telegram   
                            </li>
                            <li className="list-group-item">
                                Youtube
                            </li>
                        {/* </ul> */}
                    </div>
                </div>
                <br/>
                <div>
                    <div className="col text-center copyrights">
                        Copyright 2020 • All rights reserved •
                    </div>
                </div>
            </div>
        </footer>
    )
}
