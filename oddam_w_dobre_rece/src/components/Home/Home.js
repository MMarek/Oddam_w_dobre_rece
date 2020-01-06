import React, {Component} from 'react';
import HeaderMain from "./Header/HeaderMain";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import FourSteps from "./FourSteps/FourSteps";
import AboutUs from "./AboutUs/AboutUs";


class Home extends Component {

    render() {
        return (
            <>
                <HeaderMain/>
                <ThreeColumns/>
                <FourSteps/>
                <AboutUs/>
            </>
        )
    }
}

export default Home;