import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg'

class Title extends Component {

    render() {
        return (
            <div className='stepsTitle' id='whatIsIt'>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt='decoration'/>
            </div>
        )
    }
}

export default Title;