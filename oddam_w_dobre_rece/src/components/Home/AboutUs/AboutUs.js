import React, {Component} from "react";
import us from '../../../assets/People.jpg';
import decoration from '../../../assets/Decoration.svg';
import sign from '../../../assets/Signature.svg';

class AboutUs extends Component {
    render() {
        return (
            <section className='aboutUs' id='aboutUs'>
                <div className='aboutText'>
                    <h2>O nas</h2>
                    <img src={decoration} alt='decoration'/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className='signImage'>
                        <img src={sign} alt='sign'/>
                    </div>
                </div>
                <div className='aboutImage'>
                    <img src={us} alt='us'/>
                </div>
            </section>
        )
    }
}

export default AboutUs;