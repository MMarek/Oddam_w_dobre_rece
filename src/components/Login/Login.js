import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import LoginRegister from "../Home/Header/LoginRegister";
import decoration from "../../assets/Decoration.svg";







class Login extends Component {
    render() {
        return (
            <>
                <section className='logNav'>
                    <LoginRegister/>
                    <Navigation/>
                </section>


                <section className='loginForm'>
                    <h3>Zaloguj się</h3>
                    <img src={decoration} alt='decoration'/>
                </section>
            </>
        )
    }
}

export default Login;
