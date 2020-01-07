import React,{Component} from "react";
import LoginRegister from "./LoginRegister";
import HeaderStart from "./HeaderStart";
import Navigation from "./Navigation";
import HeaderImage from '../../../assets/Home-Hero-Image.jpg';

class HeaderMain extends Component {
    render() {
        return (
            <header>
                <div className='headerImage'>
                    <img src={HeaderImage} alt={HeaderImage}/>
                </div>
                <div className='headerNavigation'>
                    <LoginRegister/>
                    <Navigation/>
                    <HeaderStart/>
                </div>
            </header>
        )
    }
}

export default HeaderMain;