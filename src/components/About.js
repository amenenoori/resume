import React, {Component} from 'react';

import data from '../data.json';
import './About.css';

class About extends Component {
    render() {
        return (
            <section className="section-about">
                <div className="section-about__container">
                    <div className="section-about__intro">
                        <h2 className="section-about__title">
                            {data.sections[0].sectionTitle}
                            <img src="images/dots-bg-light.svg" alt=""/>
                        </h2>
                        <div className="section-about__content">
                            <div className="section-about__avatar-wrapper">
                                <figure className="section-about__avatar">
                                    <img src={data.imagebaseurl} alt={data.name} />
                                </figure>
                            </div>
                            <div className="section-about__overview">
                                <div className="section-about__caption">
                                    <p>{data.sections[0].content.caption}</p>
                                    <button className="section-about__btn section-about__btn-default">Download CV</button>
                                </div>
                                <div className="section-about__progress">
                                    {data.sections[0].content.skills.map(skill => (
                                        <div className="section-about__progress-wrapper">
                                            <div className="section-about__skill-info">
                                                <h4>{skill.title}</h4>
                                                <span>{skill.entitySkill}</span>
                                            </div>
                                            <div className="section-about__skill-progress">
                                                <div className="section-about__progress-bar" style={{backgroundColor: skill.colorCode, width: skill.entitySkill}}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;