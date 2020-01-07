import React, {Component} from 'react';
import decoration from './../../../assets/Decoration.svg'
import clothes from './../../../assets/Background-Contact-Form.jpg'
import instagram from './../../../assets/Instagram.svg'
import facebook from './../../../assets/Facebook.svg'


class ContactUs extends Component {

    render() {
        return (


            <section className='contactUs' id='kontakt'>
                <div className='contactUsImage'>
                    <img src={clothes} alt='clothes' className='backgroundPhoto'/>
                    <span className='copyright'>Copyright by Coders Lab</span>
                    <div className='socialMedia'>
                        <img src={facebook} alt='facebook'/>
                        <img src={instagram} alt='instagram'/>
                    </div>
                </div>
                <div className='contactUsText'>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={decoration} alt='decoration'/>
                    {/*<form className='contactForm' onSubmit={this.handleFormSubmit}>*/}
                        {/*{this.state.formSend && <h3 style={endTextStyle}>{this.state.endMessage}</h3>}*/}
                        <div className='nameEmail'>
                            <div className='name'>
                                <span>Wpisz swoje imię</span>
                                {/*<input placeholder='Krzysztof' value={this.state.name} onChange={this.changeName} type='text'/>*/}
                                {/*{this.state.validName && <span style={errorStyle}>Podane imię jest nieprawidłowe!</span>}*/}
                            </div>
                            <div className='email'>
                                <span>Wpisz swój email</span>
                                {/*<input placeholder='abc@xyz.pl' value={this.state.email} onChange={this.changeEmail} type='text'/>*/}
                                {/*{this.state.validEmail && <span style={errorStyle}>Podany email jest nieprawidłowy!</span>}*/}
                            </div>
                        </div>
                        <div className='message'>
                            <span>Wpisz swoją wiadomość</span>
                            {/*<textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
	                        {/*     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud*/}
	                        {/*      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'*/}
                            {/*          value={this.state.message}*/}
                            {/*          onChange={this.changeMessage} type='text'></textarea>*/}
                            {/*{this.state.validMessage && <span style={errorMsg}>Wiadomość musi mieć co najmniej 120 znaków!</span>}*/}
                        </div>
                        <div className='sendFormButton'>
                            <button className='hoverLink'>Wyślij</button>
                        </div>
                    {/*</form>*/}


                </div>
            </section>
        )
    }
}


export default ContactUs;