import React, {Component} from 'react';
import HeaderMain from "./Header/HeaderMain";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import FourSteps from "./FourSteps/FourSteps";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";


class Home extends Component {

    render() {
        return (
            <>
                <HeaderMain/>
                <ThreeColumns/>
                <FourSteps/>
                <AboutUs/>
                <WhoWeHelp/>
            </>
        )
    }
}

export default Home;

