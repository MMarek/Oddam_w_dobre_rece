import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg';
import org from './../../database/org.json';


class WhoWeHelp extends Component {
    state = {
        visibleOrganizationType: 0,
        allButtons: 3,
        itemsPerPage: 3,
        currentPage: 1,
        active: '',
    };

    changeOrganization = (e, i) => {

        let buttonNumber;
        const organizationsNumber = parseInt(org.organizations[i].items.length, 10);

        if (organizationsNumber !== 3 && organizationsNumber % 3 === 0) {
            buttonNumber = organizationsNumber / 3;
        } else if (organizationsNumber === 3) {
            buttonNumber = 0;
        }

        this.setState({
            visibleOrganizationType: i,
            allButtons: buttonNumber,
            currentPage: 1,
            active: i,
        });
    };

    changeSite = (e, i) => {

        this.setState({
            currentPage: i,
            active: i,
        });
    };

    showButtons = () => {
        let buttons = [];
        for (let i = 1; i <= this.state.allButtons ; i++) {
            buttons.push(
                <button key={i}
                        onClick={(e) => this.changeSite(e,i)}
                        className={`buttonDisplay ${this.state.currentPage === i ? 'active' : ''}`}>{i}</button>
            );
        }
        return buttons;
    };

    buildList = () => {

        const {currentPage, itemsPerPage, visibleOrganizationType} = this.state;
        const itemArray = org.organizations[visibleOrganizationType].items;
        const indexLast = currentPage * itemsPerPage;
        const indexFirst = indexLast - itemsPerPage;
        const currentFoundations = itemArray.slice(indexFirst, indexLast);

        return(
            <section className='fundation'>

                {currentFoundations.map( (item, index) => {
                    return (

                        <article className='fundList' key={index}>
                            <div className='fundName'>

                                <h3>{item.name}</h3>
                                <p>Cel i misja: {item.mission} </p>

                            </div>
                            <div className='fundDonations'>

                                <p>{item.donations}</p>

                            </div>
                        </article>
                    )
                })}
            </section>
        );
    };

    render() {



        let buttonList;
        buttonList = this.showButtons();

        let foundationList;
        foundationList = this.buildList();

        const allOrganizations = org.organizations;

        return(
            <section className='whoWeHelp' id='FunIorg'>
                <div className='whoWeHelpDesc'>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt='decoration'/>
                    <ul className='orgType'>

                        {allOrganizations.map((organization, index) => {
                            return <li key={index}
                                       onClick={(e) => this.changeOrganization(e, index)}
                                       className={this.state.visibleOrganizationType === index ? "active" : ""}>{organization.name}</li>
                        })}


                                </ul>
                    <p className='orgDescription'>
                        {org.organizations[this.state.visibleOrganizationType].description}
                    </p>
                </div>
                {foundationList}
                <div className='showButtonStyle'>
                    {buttonList}
                </div>
            </section>
        )
    }
}

export default WhoWeHelp;




// // import React, {Component} from "react";
// // import decoration from '../../../assets/Decoration.svg';
// // import org from '../../database/org';
// // import {Link} from "react-router-dom";
// //
// //
// // class WhoWeHelp extends Component {
// //     state = {
// //         visableOrganizationType: 0,
// //         allButtons: 3,
// //         itemsPerPage: 3,
// //         currentPage: 1,
// //         active: '',
// //     };
// //
// //     changeOrganization = (e, i) => {
// //
// //
// //         let buttonNumber;
// //         const organizationsNumber = parseInt(org.organizations[i].items.length, 10);
// //
// //
// //         if (organizationsNumber !== 3 && organizationsNumber % 3 === 0) {
// //             buttonNumber = organizationsNumber / 3;
// //         } else if (organizationsNumber === 3) {
// //             buttonNumber = 0;
// //         }
// //
// //
// //         this.setState({
// //             visibleOrganizationType: i,
// //             allButtons: buttonNumber,
// //             currentPage: 1,
// //             active: i,
// //         });
// //     };
// //
// //
// //     changeSite = (e, i) => {
// //
// //
// //         this.setState({
// //             currentPage: i,
// //             active: i,
// //         });
// //     };
// //
// //
// //     showButtons = () => {
// //         let buttons = [];
// //         for (let i = 1; i <= this.state.allButtons; i++) {
// //             buttons.push(
// //                 <button key={i}
// //                         onClick={(e) => this.changeSite(e, i)}
// //                         className={`buttonDisplay ${this.state.currentPage === i ? 'active' : ''}`}>{i}</button>
// //             );
// //         }
// //         return buttons;
// //     };
// //
// //     buildList = () => {
// //
// //         const {currentPage, itemsPerPage, visibleOrganizationType} = this.state;
// //         const itemArray = org.organizations[visibleOrganizationType].items;
// //
// //
// //         const indexLast = currentPage * itemsPerPage;
// //         const indexFirst = indexLast - itemsPerPage;
// //         const currentFoundations = itemArray.slice(indexFirst, indexLast);
// //
// //         return (
// //             <section className='fundation'>
// //                 {currentFoundations.map( (item, index) => {
// //                     return (
// //                         <article className='fundList' key={index}>
// //                             <div className='fundName'>
// //                                 <h3>{item.name}</h3>
// //                                 <p>Cel i misja: {item.mission}</p>
// //                             </div>
// //                             <div className='fundDonations'>
// //                                 <p>{item.donations}</p>
// //                             </div>
// //                         </article>
// //                     )
// //                 })}
// //             </section>
// //             //
// //             // <section className='fundation'>
// //             //     <article className='fundList' key=''>
// //             //         <div className='fundName'>
// //             //             <h3></h3>
// //             //             <p>Cel i misja:</p>
// //             //         </div>
// //             //         <div className='fundDonations'>
// //             //             <p></p>
// //             //         </div>
// //             //     </article>
// //             // </section>
// //         );
// //     };
// //
// //     render() {
// //         const buttonStyle = {
// //             textDecoration: "none",
// //             paddingTop: "2.3125rem",
// //             color: "#3C3C3C",
// //         };
// //
// //         let buttonList;
// //         buttonList = this.showButtons();
// //
// //         let foundationList;
// //         foundationList = this.buildList();
// //
// //         const allOrganizations = org.organizations;
// //
// //         // if (isMobile) {
// //             if (sessionStorage.getItem("email") == null) {
// //                 return (
// //                     <section className='whoWeHelp' id='whoWeHelp'>
// //                         <div className='whoWeHelpDesc'>
// //                             <h2>Komu pomagamy?</h2>
// //                             <img src={decoration} alt='decoration'/>
// //                             <ul className='organizationType'>
// //                                 {allOrganizations.map((organization, index) => {
// //                                     return (
// //                                         <>
// //                                             <li key={index}>
// //                                                 <span>{organization.name}</span>
// //                                                 <p>{organization.description}</p>
// //                                             </li>
// //                                         </>
// //                                     )
// //                                 })}
// //                             </ul>
// //                         </div>
// //
// //                         <div className='registerTitle'>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</div>
// //                         <div className='registerButton hoverLink buttonsAfterLogin'>
// //                             <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
// //                                 <p className='firstButton'>Oddaj rzeczy</p>
// //                             </Link>
// //                             <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
// //                                 <p>Zorganizuj zbiórkę</p>
// //                             </Link>
// //                         </div>
// //                     </section>
// //
// //                 )
// //             } else {
// //
// //                 return (
// //                     <section className='whoWeHelp' id='whoWeHelp'>
// //                         <div className='whoWeHelpDesc'>
// //                             <h2>Komu pomagamy?</h2>
// //                             <img src={decoration} alt='decoration'/>
// //                             <ul className='organizationType'>
// //
// //
// //                                 {allOrganizations.map((organization, index) => {
// //                                     return <li key={index}
// //                                                onClick={(e) => this.changeOrganization(e, index)}
// //                                                className={this.state.visibleOrganizationType === index ? "active" : ""}>{organization.name}</li>
// //
// //
// //                                 })}
// //
// //
// //                             </ul>
// //                             <p className='organizationDescription'>
// //                                 {org.organizations[this.state.visibleOrganizationType].description}
// //                             </p>
// //                         </div>
// //                         {foundationList}
// //                         <div className='showButtonsStyle'>
// //                             {buttonList}
// //                         </div>
// //                     </section>
// //                 )
// //             }
// //         }
// //     }
// //
// //
// // //
// // //                     <p className='orgDescription'>
// // //                     </p>
// // //                 </div>
// // //                 {foundationList}
// // //                 <div className='showButtonStyle'>
// // //                     {buttonList}
// // //                 </div>
// // //             </section>
// // //         )
// // //     }
// // // }
// //
// // export default WhoWeHelp;
//
//
// import React, {Component} from 'react';
// import decoration from '../../../assets/Decoration.svg'
// import org from '../../database/org';
// import {Link} from "react-router-dom";
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
//     changeOrganization = (e, i) => {
//
//         let buttonNumber;
//         const organizationsNumber = parseInt(org.organizations[i].items.length, 10);
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
//         const itemArray = org.organizations[visibleOrganizationType].items;
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
//                         <article className='fundList' key={index}>
//                             <div className='fundName'>
//                                 <h3>{item.name}</h3>
//                                 <p>Cel i misja: {item.mission}</p>
//                             </div>
//                             <div className='fundDonations'>
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
//         const buttonStyle = {
//             textDecoration: "none",
//             paddingTop: "2.3125rem",
//             color: "#3C3C3C",
//         };
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
//         const allOrganizations = org.organizations;
//
//
//         {
//             if (sessionStorage.getItem("email") == null) {
//                 return (
//                     <section className='whoWeHelp' id='FunIorg'>
//                         <div className='whoWeHelpDesc'>
//                             <h2>Komu pomagamy?</h2>
//                             <img src={decoration} alt='decoration'/>
//                             <ul className='organizationType'>
//                                 {allOrganizations.map((organization, index) => {
//                                     return (
//                                         <>
//                                             <li key={index}>
//                                                 <span>{organization.name}</span>
//                                                 <p>{organization.description}</p>
//                                             </li>
//                                         </>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//
//
//                         {/*<div className='registerTitle'>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</div>*/}
//                         {/*<div className='registerButton hoverLink'>*/}
//                         {/*    <Link to='/register' style={buttonStyle} className='hoverLink'>*/}
//                         {/*        <p>Załóż konto</p>*/}
//                         {/*    </Link>*/}
//                         {/*</div>*/}
//                     </section>
//                 )
//             } else {
//                 return (
//                     <section className='whoWeHelp' id='FunIorg'>
//                         <div className='whoWeHelpDesc'>
//                             <h2>Komu pomagamy?</h2>
//                             <img src={decoration} alt='decoration'/>
//                             <ul className='organizationType'>
//                                 {allOrganizations.map((organization, index) => {
//                                     return (
//                                         <>
//                                             <li key={index}>
//                                                 <span>{organization.name}</span>
//                                                 <p>{organization.description}</p>
//                                             </li>
//                                         </>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//
//
//                         <div className='registerTitle'>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</div>
//                         <div className='registerButton hoverLink buttonsAfterLogin'>
//                             <Link to='/' style={buttonStyle} className='hoverLink'>
//                                 <p className='firstButton'>Oddaj rzeczy</p>
//                             </Link>
//                             <Link to='/' style={buttonStyle} className='hoverLink'>
//                                 <p>Zorganizuj zbiórkę</p>
//                             </Link>
//                         </div>
//                     </section>
//                 )
//             }
//         } {
//             return (
//                 <section className='whoWeHelp' id='FunIorg'>
//                     <div className='whoWeHelpDesc'>
//                         <h2>Komu pomagamy?</h2>
//                         <img src={decoration} alt='decoration'/>
//                         <ul className='organizationType'>
//
//
//                             {allOrganizations.map((organization, index) => {
//                                 return <li key={index}
//                                            onClick={(e) => this.changeOrganization(e, index)}
//                                            className={this.state.visibleOrganizationType === index ? "active" : ""}>{organization.name}</li>
//
//
//                             })}
//
//
//                         </ul>
//                         <p className='organizationDescription'>
//                             {org.organizations[this.state.visibleOrganizationType].description}
//                         </p>
//                     </div>
//                     {foundationList}
//                     <div className='showButtonsStyle'>
//                         {buttonList}
//                     </div>
//                 </section>
//             )
//         }
//     }
// }
//
//
// export default WhoWeHelp;