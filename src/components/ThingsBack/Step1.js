import React, {Component} from 'react';
// import lastStep from "../../assets/Background-Form.jpg";
// import info from "";



class Step1 extends Component {

    render() {

        return (
            <>




                {/*<div className='progressBar'>*/}
                {/*    <span className='bar activeBar'>1</span>*/}
                {/*    <span className='bar'>2</span>*/}
                {/*    <span className='bar'>3</span>*/}
                {/*    <span className='bar'>4</span>*/}
                {/*    <span className='bar'><img src={lastStep} alt={lastStep}/></span>*/}
                {/*</div>*/}
                {/**/}
                {/*<div className='titleStep'>*/}
                {/*    <span className='mobilechoose'>Zaznacz co chcesz oddać:</span>*/}
                {/*</div>*/}






                <div className='important'>
                    <h2>Ważne!</h2>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                        przekazać.</p>
                </div>


                <div className='steps'>
                    <span className='firstStep'>Krok 1/4</span>
                    <span className='choose'>Zaznacz co chcesz oddać:</span>
                    {this.props.radioError && <span className="errorStyle errorRadio">Zaznacz jedną z opcji!</span>}


                    {/*<Step1Form handleRadioChange={this.props.handleRadioChange} radioValue={this.props.radioValue}/>*/}


                    <div className='nextPrevButtons'>
                        <span className='nextButton hoverLink'>Dalej</span>
                    </div>
                </div>
            </>
        )
    }
}


export default Step1;