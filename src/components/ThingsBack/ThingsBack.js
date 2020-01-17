import React, {Component} from 'react';
import ContactUs from "../Home/ContactUs/ContactUs";
import ThingsBackHead from "./ThingsBackHead";
import Step1 from "./Step1";
import Step2 from "./Step2";

class ThingsBack extends Component {


    render() {


        return (
            <>
                <Step1/>
                <Step2/>
                {/*<ThingsBackForm/>*/}
                <ThingsBackHead/>
                <ContactUs/>
            </>
        )
    }
}

export default ThingsBack;


