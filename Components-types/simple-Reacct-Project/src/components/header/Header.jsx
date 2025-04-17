import React from 'react'
import "./header.css"
import style from "./header.module.css"

const Header = () => {
    return (
        <header className={style.header_container}>
            <h2>Header</h2>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header