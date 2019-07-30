import React from "react";
import { GiDiceEightFacesEight } from 'react-icons/gi';
import { FaRegCopyright } from "react-icons/fa";

const Footer = (props) => {
    return (

        <footer className="App-footer">
            <p>
                <a href="https://AnJaWr.github.io/my_portfolio/index.html" target="blank" className="link">
                    Copyright <FaRegCopyright/> Anna   <GiDiceEightFacesEight />   Wróbel  
        </a>
            </p>
        </footer>

    )
};



export default Footer;
