import React from "react";
import {init,animate, onWindowResize} from './Algos/Main';
// import 


function Footer(){

    const styling = {
        textAlign: 'center',
        color: '#ccd6f6',
        fontFamily: ['Roboto Mono', 'monospace'],
        fontSize: 'large'
    }


    return (
        <footer>
            <script>{init}</script>
            <script>{animate}</script>
            <script>{window.addEventListener('resize', onWindowResize, false)}</script>
        <p style={styling}>
            Design with ❤️  by 
            <a href="https://github.com/easywork01"> Pranjal Raj</a>
            <br/> All Rights Reserved
        </p>

        </footer>
    );
}

export default Footer;