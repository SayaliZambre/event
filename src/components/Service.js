import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCamera, faBrush, faSeedling, faBirthdayCake, faMusic, faUtensils, faRing } from '@fortawesome/free-solid-svg-icons';

function Service() {
    return (
        <section className="service" id="service">
            <div className="title">
                <h1><span>R</span>view</h1>
            </div>
            <div className="services-row">
                <div className="services-col">
                    <FontAwesomeIcon icon={faBookOpen} />
                    <h2>invitation</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faCamera} />
                    <h2>Photography & Video</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faBrush} />
                    <h2>Beauty & Makeup</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faSeedling} />
                    <h2>tour and travels</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    <h2>Party (dj)</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faMusic} />
                    <h2>music band</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faUtensils} />
                    <h2>Catering</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faRing} />
                    <h2>pre vwedding</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                {/* <div className="services-col">
                    <FontAwesomeIcon icon={faRing} />
                    <h2>decoration</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div>
                <div className="services-col">
                    <FontAwesomeIcon icon={faRing} />
                    <h2>Party</h2>
                    <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
                </div> */}
            </div>
        </section>
    );
}

export default Service;
