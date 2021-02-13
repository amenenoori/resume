import React, {Component} from 'react';

import data from '../data.json';
import './Works.css';

class Works extends Component {
    render() {
        return (
            <section className="section-works">
                <div className="section-works__container">
                    <div className="section-works__intro">
                        <h2 className="section-works__title">
                            {data.sections[2].sectionTitle}
                            <img src="images/dots-bg-light.svg" alt=""/>
                        </h2>
                        <div className="section-works__content">
                            {data.sections[2].items.map(work => (
                                <div className="section-works__item">
                                    <div className="section-works__box"> 
                                        <div className="section-works__details">
                                            <h4 className="section-works__title">{work.content.title}</h4>
                                        </div>
                                        <figure className="section-works__thumb">
                                            <img src={work.content.image} alt={work.content.title}/>
                                        </figure>
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

export default Works;