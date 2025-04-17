import React from 'react'
import esa from "./footer.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {


    return (
        <div className={esa.footer_container}>
            <h2>Footer</h2>
            <p>All rights reserved &copy; 2023</p>
            <p>Follow us on social media</p>
            <ul className={esa.footer_list}>
                <li>
                    <FaFacebook />
                </li>

                <li>
                    <FaTwitterSquare />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
        </div>
    )
}

export default Footer