// import React, {Component} from 'react';
//
// class Step3 extends Component {
//
//     render() {
//
//             return (
//                 <>
//                     <div className='progressBar'>
//                         <span className='bar doneBar'>1</span>
//                         <span className='bar doneBar'>2</span>
//                         <span className='bar activeBar'>3</span>
//                         <span className='bar'>4</span>
//                     </div>
//
//
//                     <div className='titleStep'>
//                         <span className='mobilechoose'>Znajdź organizację, której chcesz pomóc:</span>
//                     </div>
//
//
//                     <div className='warningStep'>
//                         <div className='warning'>
//                             <h2>Ważne!</h2>
//                             <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
//                                 filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
//                         </div>
//                     </div>
//
//
//                     <div className='steps'>
//                         <div className='selectForm localization'>
//                             <span className=''>Lokalizacja</span>
//                         </div>
//
//
//                         {this.props.errorStep3 && <span className="errorStyle errorLocalization">
// 	                        Wybierz miasto lub wpisz organizację! Zaznacz przynajmniej jedną z opcji!</span>}
//                         <div className='nextPrevButtons'>
//                             <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
//                             <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
//                         </div>
//                     </div>
//
//
//                     <div className='warningStep'>
//                         <h2>Ważne!</h2>
//                         <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
//                             filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
//                     </div>
//
//
//                     <div className='steps'>
//                         <span className='stepNum'>Krok 3/4</span>
//                         <span className='choose'>Lokalizacja:</span>
//                         <div className='selectForm localization'>
//                         </div>
//
//
//                         {this.props.errorStep3 && <span className="errorStyle errorLocalization">
// 	                        Wybierz miasto lub wpisz organizację! Zaznacz przynajmniej jedną z opcji!</span>}
//                         <div className='nextPrevButtons'>
//                             <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
//                             <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
//                         </div>
//                     </div>
//                 </>
//             )
//         }
//     }
//
//
//
// export default Step3;










import React, {Component} from 'react';
import Select from 'react-styled-select';
// import info from "../../assets/Icon-8.svg";
// import lastStep from "../../assets/Icon-7.svg";


class Step3Form extends Component {
    render() {
        return (
            <div className='whoYouHelp'>
                <span className='chooseHelp'>Komu chcesz pomóc?</span>


                <form className='checkboxFormHelp'>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='kids' name="whoToHelp" value="dzieciom"
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf("dzieciom") > -1}/>
                        <label htmlFor='kids'>dzieciom</label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='mothers' name="whoToHelp" value="samotnym matkom"
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf("samotnym matkom") > -1}/>
                        <label htmlFor='mothers'>samotnym matkom</label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='homeless' name="whoToHelp" value="bezdomnym"
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf("bezdomnym") > -1}/>
                        <label htmlFor='homeless'>bezdomnym</label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='disabled' name="whoToHelp" value="niepełnosprawnym"
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf("niepełnosprawnym") > -1}/>
                        <label htmlFor='disabled'>niepełnosprawnym</label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='old' name="whoToHelp" value="osobom starszym"
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf("osobom starszym") > -1}/>
                        <label htmlFor='old'>osobom starszym</label>
                    </div>
                </form>


                <span className='chooseHelp'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</span>
                <input type='text' id='organization' name="organization"
                       onChange={this.props.handlewriteOrganization}/>


            </div>
        )
    }
}


class Step3 extends Component {

    render() {


        const options = [
            {label: "Poznań", value: "Poznań"},
            {label: "Warszawa", value: "Warszawa"},
            {label: "Kraków", value: "Kraków"},
            {label: "Wrocław", value: "Wrocław"},
            {label: "Katowice", value: "Katowice"},
        ];



        console.log(this.props.value, this.props.checked)


            return (
                <>
                    <div className='progressBar'>
                        <span className='bar doneBar'>1</span>
                        <span className='bar doneBar'>2</span>
                        <span className='bar activeBar'>3</span>
                        <span className='bar'>4</span>
                        {/*<span className='bar'><img src={lastStep} alt={lastStep}/></span>*/}
                    </div>


                    <div className='titleStep'>
                        <span className='mobilechoose'>Znajdź organizację, której chcesz pomóc:</span>
                    </div>


                    <div className='warningStep'>
                        {/*<img src={info} alt={info}/>*/}
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


                        <Step3Form handleCheckboxChange={this.props.handleCheckboxChange} checkboxValues={ this.props.checkboxValues}
                                   handlewriteOrganization={this.props.handlewriteOrganization}/>


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


                        <Step3Form handleCheckboxChange={this.props.handleCheckboxChange} checkboxValues={ this.props.checkboxValues}
                                   handlewriteOrganization={this.props.handlewriteOrganization}/>


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
