import React, {Component} from 'react';
// import LoginRegister from "../Home/Header/LoginRegister";
// import Navigation from "../Home/Header/Navigation";
import decoration from '../../assets/Decoration.svg';


class ThingsBackHead extends Component {

    render() {

            return (
                <section className='thingsBack'>
                    <div className='thingsBackHead'>
                        {/*<LoginRegister/>*/}
                        {/*<Navigation/>*/}
                    </div>
                    <div className='thingsBackFirst'>
                        <div className='thingsBackText'>
                            <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                            <img src={decoration} alt={decoration}/>
                            <h3>Wystarczą 4 proste kroki:</h3>


                            <ul className='thingsBackSteps'>
                                <li>
                                    <div className='square'></div>
                                    <span>1</span>
                                    <p>Wybierz<br/>rzeczy</p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>2</span>
                                    <p>Spakuj je<br/>w worki</p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>3</span>
                                    <p>Wybierz<br/>fundację</p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>4</span>
                                    <p>Zamów<br/>kuriera</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            )
        }
}


export default ThingsBackHead;