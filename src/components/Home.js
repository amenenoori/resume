/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

import data from "../data.json";
import Parallax from "./Parallax";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <section className="section-home">
                <div className="section-home__container">
                    <div className="section-home__intro">
                        <figure className="section-home__avatar">
                            <img src={data.imagebaseurl} alt={data.name} />
                        </figure>
                        <h1 className="section-home__title">{data.name}</h1>
                        <p className="section-home__subtitle">I'm a {data.role}</p>
                        <ul className="section-home__social-icons">
                            {Object.entries(data.links).map(([key, value]) => (
                                <li className="section-home__social-item">
                                    <a href={value} className="section-home__social-link" target="_blank" rel="noopener noreferrer">
                                        <img src={`images/${key}.svg`} alt={key} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <a href="#" className="section-home__btn section-home__btn-default">
                                Hire me
                            </a>
                        </div>
                    </div>
                </div>
                <Parallax />
            </section> 
        );
    }
}

export default Home;