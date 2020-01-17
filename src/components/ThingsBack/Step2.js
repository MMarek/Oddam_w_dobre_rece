// import React, {Component} from 'react';
// import Select from 'react-styled-select';
//
//
// class Step2Form extends Component {
//     render() {
//
//
//         return (
//             <div className='selectForm'>
//                 <span>Liczba 60L worków:</span>
//             </div>
//         )
//     }
// }
//
//
// class Step2 extends Component {
//
//     render() {
//
//             return (
//                 <>
//                     <div className='progressBar'>
//                         <span className='bar doneBar'>1</span>
//                         <span className='bar activeBar'>2</span>
//                         <span className='bar'>3</span>
//                         <span className='bar'>4</span>
//                         {/*<span className='bar'><img src={lastStep} alt={lastStep}/></span>*/}
//                     </div>
//
//
//                     <div className='titleStep'>
//                         <span className='mobilechoose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
//                     </div>
//
//
//                     <div className='warningStep'>
//                         {/*<img src={info} alt={info}/>*/}
//                         <div className='warning'>
//                             <h2>Ważne!</h2>
//                             <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
//                         </div>
//                     </div>
//
//
//                     <div className='steps'>
//
//
//                         <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>
//
//
//                         {this.props.errorSelect && <span className="errorStyle errorRadio">Wybierz jedną z opcji!</span>}
//                         <div className='nextPrevButtons'>
//                             <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
//                             <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
//                         </div>
//                     </div>
//
//                     <div className='warningStep'>
//                         <h2>Ważne!</h2>
//                         <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
//                     </div>
//
//
//                     <div className='steps'>
//                         <span className='stepNum'>Krok 2/4</span>
//                         <span className='choose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
//
//
//                         <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>
//
//
//                         {this.props.errorSelect && <span className="errorStyle errorRadio">Wybierz jedną z opcji!</span>}
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
// export default Step2;













import React, {Component} from 'react';
// import Select from 'react-styled-select';
// import lastStep from "../../assets/Form-Hero-Image.jpg";
// import info from "../../assets/Background-Form.jpg";


class Step2Form extends Component {
    render() {

        return (
            <div className='selectForm'>
                <span>Liczba 60L worków:</span>
            </div>
        )
    }
}


class Step2 extends Component {

    render() {

            return (
                <>
                    <div className='progressBar'>
                        <span className='bar doneBar'>1</span>
                        <span className='bar activeBar'>2</span>
                        <span className='bar'>3</span>
                        <span className='bar'>4</span>
                        {/*<span className='bar'><img src={lastStep} alt={lastStep}/></span>*/}
                    </div>


                    <div className='titleStep'>
                        <span className='mobilechoose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
                    </div>


                    <div className='warningStep'>
                        {/*<img src={info} alt={info}/>*/}
                        <div className='warning'>
                            <h2>Ważne!</h2>
                            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                        </div>
                    </div>


                    <div className='steps'>


                        <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>


                        {this.props.errorSelect && <span className="errorStyle errorRadio">Wybierz jedną z opcji!</span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>

                    <div className='warningStep'>
                        <h2>Ważne!</h2>
                        <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                    </div>


                    <div className='steps'>
                        <span className='stepNum'>Krok 2/4</span>
                        <span className='choose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>


                        <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>


                        {this.props.errorSelect && <span className="errorStyle errorRadio">Wybierz jedną z opcji!</span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        }
    }


export default Step2;