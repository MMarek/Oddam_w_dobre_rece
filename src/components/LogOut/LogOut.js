import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import LoginRegister from "../Home/Header/LoginRegister";


class LogOut extends Component {

    render() {

        const linkStyle = {
            padding: "1rem",
            textDecoration: "none",
            color: "#000",
        };


        return (
            <>
                <section className='logNav'>
                    <LogReg/>
                    <Navigation/>
                </section>
                <section className='loginForm'>
                    <h3>Wylogowanie nastąpiło pomyślnie!</h3>
                    <img src={decoration} alt='decoration'/>

                    <div className='backHome'>
                        <Link to='/' style={linkStyle}><span className='clickButton'>Strona główna</span></Link>
                    </div>
                </section>
            </>
        )
    }
}

export default LogOut;

