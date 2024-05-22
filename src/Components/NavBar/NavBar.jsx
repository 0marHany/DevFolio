import React, { useContext, useLayoutEffect, useState } from 'react'
import style from './style.module.css'
import { AboutContext } from '../Context/Context';
export default function NavBar() {
    const { aboutOffset } = useContext(AboutContext);
    console.log("************" + aboutOffset);
    const [navPos, setNavPos] = useState(0);
    useLayoutEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            setNavPos(scrollY)
            console.log(scrollY);

        })
    }, [])
    return <>
        <nav className={`navbar navbar-expand-lg position-fixed  top-0  start-0  end-0  ${navPos >= (aboutOffset-120 )? "bgDark" : "bgTrans"}  z-3 `}>
            <div className="container-fluid  ">
                <a className="navbar-brand fw-bold  text-white  fs-4" href="#">DevFolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav    ">
                        <li className="nav-item">

                            <a className={`${style.bdr} nav-link active`} aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.bdr} nav-link `} href="#About">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.bdr} nav-link `} href="#SERVICES">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.bdr} nav-link `} href="#Work">WORK</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.bdr} nav-link `} href="#Blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.bdr} nav-link `} href='#Contact'>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}
