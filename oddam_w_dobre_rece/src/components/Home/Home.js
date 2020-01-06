import React, {Component} from 'react';
import HeaderMain from "./Header/HeaderMain";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import FourSteps from "./FourSteps/FourSteps";



class Home extends Component {

    render() {
        return (
            <>
                <HeaderMain/>
                <ThreeColumns/>
                <FourSteps/>
            </>
        )
    }
}

export default Home;