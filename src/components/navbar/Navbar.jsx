import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [active, setactive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname}=useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setactive(true) : setactive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }
    return (
        <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                     <Link to="/" className='link'> 
                    <span className="text">Fiver</span>
                     </Link> 
                    <span className="dot">.</span>
                    {/* </Link> */}
                </div>
                <div className="links">
                    <span>FiverBusiness</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join</button>}

                    {currentUser && (
                        <div className='user' onClick={() => setOpen(!open)}>
                            <img src='http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' alt="fasa" />
                            <span>{currentUser?.username}</span>
                            {open && <div className='options'>
                                {currentUser?.isSeller && (
                                    <>
                                        <Link className="link" to="/mygigs">Gigs</Link>
                                        <Link className="link" to="/add">Add new Gig</Link >
                                    </>
                                )}
                                <Link className="link" to="/orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" to="/">Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>

            </div>
            {(active|| pathname!=="/") &&  (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            )
            }
        </div>

    );
}

export default Navbar
