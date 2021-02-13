import React, {Component} from 'react';

import data from '../data.json';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section className="section-contact">
                <div className="section-contact__container">
                    <div className="section-contact__intro">
                        <h2 className="section-contact__title">
                            {data.sections[3].sectionTitle}
                            <img src="images/dots-bg-light.svg" alt=""/>
                        </h2>
                        <div className="section-contact__content">
                            <div className="section-contact__info">
                                <h3>Let's talk about everything!</h3>
                                <p>Don't like forms? Send me an
                                    <a class="section-contact__link" href="mailto:astazmin@gmail.com"> email</a>. 👋
                                </p>
                            </div>
                            <div className="section-contact__form">
                                <form action="">
                                    <div className="section-contact__contact-form">
                                        <div className="section-contact__form-group">
                                            <div className="section-contact__text-field">
                                                <input type="text" name="name" placeholder="Your name" value=""/>
                                            </div>
                                            <div className="section-contact__text-field">
                                                <input type="text" name="email" placeholder="Email address" value=""/>
                                            </div>
                                            <div className="section-contact__text-field">
                                                <input type="text" name="subject" placeholder="Subject" value=""/>
                                            </div>
                                            <div className="section-contact__textarea">
                                                <textarea name="message" id="InputMessage" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="section-contact__submit section-contact__btn section-contact__btn-default">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;