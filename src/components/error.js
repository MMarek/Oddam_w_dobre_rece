// import React, {Component} from 'react';
// import decoration from './../../../assets/Decoration.svg'
// import clothes from './../../../assets/Background-Contact-Form.jpg'
// import instagram from './../../../assets/Instagram.svg'
// import facebook from './../../../assets/Facebook.svg'
//

// class ContactUs extends Component {
//
//     render() {
//         return (
//
//
            {/*<section className='contactUs' id='kontakt'>*/}
            {/*    <div className='contactUsImage'>*/}
            {/*        <img src={clothes} alt='clothes' className='backgroundPhoto'/>*/}
            {/*        <span className='copyright'>Copyright by Coders Lab</span>*/}
            {/*        <div className='socialMedia'>*/}
            {/*            <img src={facebook} alt='facebook'/>*/}
            {/*            <img src={instagram} alt='instagram'/>*/}
                    // </div>
                // </div>
                {/*<div className='contactUsText'>*/}
                {/*    <h2>Skontaktuj się z nami</h2>*/}
                {/*    <img src={decoration} alt='decoration'/>*/}
                {/*    <form className='contactForm' onSubmit={this.handleFormSubmit}>*/}
                        // {this.state.formSend && <h3 style={endTextStyle}>{this.state.endMessage}</h3>}
                        {/*<div className='nameEmail'>*/}
                        {/*    <div className='name'>*/}
                        {/*        <span>Wpisz swoje imię</span>*/}
                        {/*        <input placeholder='Krzysztof' value={this.state.name} onChange={this.changeName} type='text'/>*/}
                                // {this.state.validName && <span style={errorStyle}>Podane imię jest nieprawidłowe!</span>}
                            // </div>
                            {/*<div className='email'>*/}
                            {/*    <span>Wpisz swój email</span>*/}
                            {/*    <input placeholder='abc@xyz.pl' value={this.state.email} onChange={this.changeEmail} type='text'/>*/}
                                // {this.state.validEmail && <span style={errorStyle}>Podany email jest nieprawidłowy!</span>}
                            // </div>
                        // </div>
                        {/*<div className='message'>*/}
                        {/*    <span>Wpisz swoją wiadomość</span>*/}
                        {/*    <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
	                             // tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
	                             //  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                 //      value={this.state.message}
                                 //      onChange={this.changeMessage} type='text'></textarea>
                            // {this.state.validMessage && <span style={errorMsg}>Wiadomość musi mieć co najmniej 120 znaków!</span>}
                        // </div>
                        {/*<div className='sendFormButton'>*/}
                        {/*    <button className='hoverLink'>Wyślij</button>*/}
                        // </div>
                    // </form>
                //
                //
                // </div>
            // </section>
        // )
    // }
// }
//
//
// export default ContactUs;







// import React, {Component} from "react";
// import decoration from '../../../assets/Decoration.svg';
//
//
// class WhoWeHelp extends Component {
//     state = {
//         visableOrganizationType: 0,
//         allButtons: 3,
//         itemsPerPage: 3,
//         currentPage: 1,
//         active: '',
//     };
//
//     changeOrganization = (e,i) => {
//         let buttonNumber;
//         const organizationsNumber = parseInt(organizations.organizations[i].items.length,10);
//
//         if (organizationsNumber !== 3 && organizationsNumber % 3 === 0) {
//             buttonNumber = organizationsNumber / 3;
//         } else if (organizationsNumber === 3) {
//             buttonNumber = 0
//         }
//
//         this.setState({
//             visableOrganizationType: 1,
//             allButtons: buttonNumber,
//             currentPage: 1,
//             active: i,
//         });
//     };
//
//     changeSite = (e, i) => {
//         this.setState({
//             currentPage: i,
//             active: i,
//         });
//     };
//
//     showButtons = () => {
//         let buttons = [];
//         for (let i = 1; i <= this.state.allButtons ; i++) {
//             buttons.push(
//                 <button key={i}
//                         onClick={(e) => this.changeSite(e,i)}
//                         className={`buttonDisplay ${this.state.currentPage === i ? 'active' : ''}`}>{i}</button>
//             );
//         }
//         return buttons;
//     };
//
//     buildList = () => {
//         const {currentPage, itemsPerPage,visableOrganizationType} = this.state;
//         const itemArray = organizations.organizations[visableOrganizationType].items;
//
//         const indexLast = currentPage * itemsPerPage;
//         const indexFirst = indexLast - itemsPerPage;
//         const currentFundations = itemArray.slice(indexFirst, indexLast);
//
//         return(
//             <section className='fundation'>
//                 {currentFundations.map((item,index) =>{
//                 return(
//                     <article className='fundList' key={index}>
//                         <div className='fundName'>
//                             <h3>{item.name}</h3>
//                             <p>Cel i misja: {item.mission}</p>
//                         </div>
//                         <div className='fundDonations'>
//                             <p>{item.donations}</p>
//                         </div>
//                     </article>
//                 )
//                 })}
//             </section>
//         );
//     };
//
//     render() {
//         let buttonList;
//         buttonList = this.showButtons();
//
//         let foundationList;
//         foundationList = this.buildList();
//
//         const allOrganizations = organizations.organizations;
//
//         return(
//             <section className='whoWeHelp' id='whoWeHelp'>
//                 <div className='whoWeHelpDesc'>
//                     <h2>Komu pomagamy?</h2>
//                     <img src={decoration} alt='decoration'/>
//                     <ul className='organizationType'>
//
//                         {allOrganizations.map((organization, index) => {
//                         return <li key={index}
//                                     onClick={(e)} => this.changeOrganization(e, index)}
//                             className={this.state.visableOrganizationType === index ? 'active' : ''}>{organization.name}</li>
//                         })}
//                     </ul>
//                     <p className='orgDescription'>
//                         {organizations.organizations[this.state.visableOrganizationType].description}
//                     </p>
//                 </div>
//                 {foundationList}
//                 <div className='showButtonStyle'>
//                     {buttonList}
//                 </div>
//             </section>
//         )
//     }
// }
//
// export default WhoWeHelp;








// import React, {Component} from 'react';
// import decoration from '../../../assets/Decoration.svg'
// // import organizations from './../../database/organizations.json';
//
//
// class WhoWeHelp extends Component {
//     state = {
//         visibleOrganizationType : 0,
//         allButtons: 3,
//         itemsPerPage: 3,
//         currentPage: 1,
//         active: "",
//     };
//
//
//     changeOrganization = (e, i) => {
//
//
//         let buttonNumber;
//         const organizationsNumber = parseInt(organizations.organizations[i].items.length, 10);
//
//
//         if (organizationsNumber !== 3 && organizationsNumber % 3 === 0) {
//             buttonNumber = organizationsNumber / 3;
//         } else if (organizationsNumber === 3) {
//             buttonNumber = 0;
//         }
//
//
//         this.setState({
//             visibleOrganizationType: i,
//             allButtons: buttonNumber,
//             currentPage: 1,
//             active: i,
//         });
//     };
//
//
//     changeSite = (e, i) => {
//
//
//         this.setState({
//             currentPage: i,
//             active: i,
//         });
//     };
//
//
//     showButtons = () => {
//         let buttons = [];
//         for (let i = 1; i <= this.state.allButtons; i++) {
//             buttons.push(
//                 <button key={i}
//                         onClick={ (e) => this.changeSite(e, i)}
//                         className={`buttonDisplay ${this.state.currentPage === i ? "active" : ""}`}>{i}</button>
//             );
//         }
//         return buttons;
//     };
//
//
//     buildList = () => {
//
//
//         const {currentPage, itemsPerPage, visibleOrganizationType} = this.state;
//         const itemArray = organizations.organizations[visibleOrganizationType].items;
//
//
//         const indexLast = currentPage * itemsPerPage;
//         const indexFirst = indexLast - itemsPerPage;
//         const currentFoundations = itemArray.slice(indexFirst, indexLast);
//
//
//         return (
//             <section className='foundation'>
//                 {currentFoundations.map( (item, index) => {
//                     return (
//                         <article className='foundationList' key={index}>
//                             <div className='foundationName'>
//                                 <h3>{item.name}</h3>
//                                 <p>Cel i misja: {item.mission}</p>
//                             </div>
//                             <div className='foundationDonations'>
//                                 <p>{item.donations}</p>
//                             </div>
//                         </article>
//                     )
//                 })}
//             </section>
//         );
//     };
//
//
//     render() {
//
//
//         let buttonList;
//         buttonList = this.showButtons();
//
//
//         let foundationList;
//         foundationList = this.buildList();
//
//
//         const allOrganizations = organizations.organizations;
//
//
//         return (
//             <section className='whoWeHelp' id='whoWeHelp'>
//                 <div className='whoWeHelpDesc'>
//                     <h2>Komu pomagamy?</h2>
//                     <img src={decoration} alt='decoration'/>
//                     <ul className='organizationType'>
//
//
//                         {allOrganizations.map((organization, index) => {
//                             return <li key={index}
//                                        onClick={(e) => this.changeOrganization(e, index)}
//                                        className={this.state.visibleOrganizationType === index ? "active" : ""}>{organization.name}</li>
//
//
//                         })}
//
//
//                     </ul>
//                     <p className='organizationDescription'>
//                         {organizations.organizations[this.state.visibleOrganizationType].description}
//                     </p>
//                 </div>
//                 {foundationList}
//                 <div className='showButtonsStyle'>
//                     {buttonList}
//                 </div>
//             </section>
//         )
//     }
// }
//
//
// export default WhoWeHelp;


//////////////////// login:

//     this.props.firebase
//         .doSignInWithEmailAndPassword(email, password)
//         .then(authUser => {
//             this.setState({
//                 email: "",
//                 password: ""
//             });
//             console.log("sukces!");


//             sessionStorage.setItem("email", `${authUser.user.email}`);
//             const { history } = this.props;
//             history.push("/");
//         })
//         .catch((error) => {
//
//
//             if (error.code === 'auth/user-not-found') {
//                 this.setState({
//                     loginError: true,
//                     email: "",
//                     password: "",
//                 })
//             }
//         });


/////////////// register:

// import {FirebaseContext, withFirebase} from '../firebase/context';

// this.props.firebase
//     .doCreateUserWithEmailAndPassword(email, password)
//     .then(authUser => {
//         this.setState({
//             email: "",
//             password: "",
//             password2: ""
//         });
//         console.log("sukces!");
//
//
//         sessionStorage.setItem("email", `${this.state.email}`);
//         const { history } = this.props;
//         history.push("/");
//     })
//     .catch((error) => {
//
//
//         if (error.code === 'auth/email-already-in-use') {
//             this.setState({
//                 registerError: true,
//                 password: "",
//                 password2: ""
//             })
//         }
//     });
