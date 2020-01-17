import React, {Component} from 'react';

class Step3 extends Component {

    render() {

            return (
                <>
                    <div className='progressBar'>
                        <span className='bar doneBar'>1</span>
                        <span className='bar doneBar'>2</span>
                        <span className='bar activeBar'>3</span>
                        <span className='bar'>4</span>
                    </div>


                    <div className='titleStep'>
                        <span className='mobilechoose'>Znajdź organizację, której chcesz pomóc:</span>
                    </div>


                    <div className='warningStep'>
                        <div className='warning'>
                            <h2>Ważne!</h2>
                            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                                filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                        </div>
                    </div>


                    <div className='steps'>
                        <div className='selectForm localization'>
                            <span className=''>Lokalizacja</span>
                        </div>


                        {this.props.errorStep3 && <span className="errorStyle errorLocalization">
	                        Wybierz miasto lub wpisz organizację! Zaznacz przynajmniej jedną z opcji!</span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>


                    <div className='warningStep'>
                        <h2>Ważne!</h2>
                        <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                            filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                    </div>


                    <div className='steps'>
                        <span className='stepNum'>Krok 3/4</span>
                        <span className='choose'>Lokalizacja:</span>
                        <div className='selectForm localization'>
                        </div>


                        {this.props.errorStep3 && <span className="errorStyle errorLocalization">
	                        Wybierz miasto lub wpisz organizację! Zaznacz przynajmniej jedną z opcji!</span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        }
    }



export default Step3;
