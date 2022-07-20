import React from 'react'

export default function Footbar() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <span className="brand">OjiStore</span>
                        <p className="brand-tagline font weight-light">
                            Get your order as soon as quickly
                        </p>
                    </div>
                    <div className="col-3 mr-5">
                        <h5 className="mt-2">
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
                        <h5 className="mt-2">
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
