import React, {Component} from 'react';
import HeaderMain from "./Header/HeaderMain";
import ThreeColumns from "./ThreeColumns/ThreeColumns";



class Home extends Component {

    render() {
        return (
            <>
                <HeaderMain/>
                <ThreeColumns/>
            </>
        )
    }
}

export default Home;