import React, {Component} from 'react';
import {Link} from "react-router-dom";
// import {Link} from 'react-router-dom';

class LoginRegister extends Component {
    render() {
        const linkStyle = {
            textDecoration: 'none',
            paddingLeft: '1rem',
            paddingTop: '2rem',
            color: '#737373',
        };
        return (
            <div className='LoginRegister'>
                <Link to='../Login' style={linkStyle}><span className='hoverLink'>Zaloguj</span></Link>
                <Link to='../Register' style={linkStyle}><span className='register hoverLink'>Załóż konto</span></Link>
            </div>
        )
    }
}

export default LoginRegister


//             paddingTop: "2.3125rem",  ??
