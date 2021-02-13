import React, {Component} from 'react';

import data from '../data.json';
import './Services.css';

class Services extends Component {
    render() {
        return (
            <section className="section-services">
                <div className="section-services__container">
                    <div className="section-services__intro">
                        <h2 className="section-services__title">
                            {data.sections[1].sectionTitle}
                            <img src="images/dots-bg-light.svg" alt="" />
                        </h2>
                        <div className="section-services__content">
                            {data.sections[1].items.map(service => (
                                <div className="section-services__item">
                                    <div className="section-services__box" 
                                        style={{backgroundColor: service.content.colorCode, boxShadow: service.content.shadowColor}}
                                    >
                                        <figure className="section-services__thumb">
                                            <img src={service.content.image} alt={service.content.title}/>
                                        </figure>
                                        <h3>{service.content.title}</h3>
                                        <p>{service.content.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;