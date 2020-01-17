import React, {Component} from 'react';
import ContactUs from "../Home/ContactUs/ContactUs";
import ThingsBackHead from "./ThingsBackHead";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
// import Step4 from "./Step4";

class ThingsBack extends Component {


    render() {


        return (
            <>
                {/*<ThingsBackForm/>*/}
                <ThingsBackHead/>
                <Step1/>
                <Step2/>
                <Step3/>
                {/*<Step4/>*/}
                <ContactUs/>
            </>
        )
    }
}

export default ThingsBack;


