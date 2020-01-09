import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg';
// import organizations from './../../database/organizations.json';


class WhoWeHelp extends Component {
    state = {
        visableOrganizationType: 0,
        allButtons: 3,
        itemsPerPage: 3,
        currentPage: 1,
        active: '',
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

        return(
            <section className='fundation'>
                    <article className='fundList' key=''>
                        <div className='fundName'>
                            <h3></h3>
                            <p>Cel i misja: </p>
                        </div>
                        <div className='fundDonations'>
                            <p></p>
                        </div>
                    </article>
            </section>
        );
    };

    render() {
        let buttonList;
        buttonList = this.showButtons();

        let foundationList;
        foundationList = this.buildList();

        return(
            <section className='whoWeHelp' id='FunIorg'>
                <div className='whoWeHelpDesc'>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt='decoration'/>
                    <ul className='organizationType'>
                    </ul>
                    <p className='orgDescription'>
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
