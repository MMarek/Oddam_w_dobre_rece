import React, {Component} from "react";
import {Link} from "react-router-dom";

class Button extends Component {
    render() {
        const buttonStyle = {
            textDecoration: 'none',
            paddingTop: '2.3125rem',
            color: '#3C3C3C',
        };

        return (
            <section className='buttonStep'>
                <Link to='/Login' style={buttonStyle} className='hoverLink'>
                    <p className='button'>
                        Oddaj<br/>rzeczy
                    </p>
                </Link>
            </section>
        )
    }
}

export default Button;