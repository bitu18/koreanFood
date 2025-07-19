import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import HeaderContent from '../HeaderContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div id="contact" className={cx('contact')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <HeaderContent title="Contact" des="Visit Us" />

                            <div className={cx('text')}>
                                <p>
                                    <span className={cx('bold')}>Phone:</span>
                                    <a href="tel:(440) 334-3262" className={cx('btn')}>
                                        (440) 334-3262
                                    </a>
                                </p>
                                <p>
                                    <span className={cx('bold')}>Email: </span>
                                    <a href="mailto:TasteTheVibe833@gmail.com" className={cx('btn')}>
                                        TasteTheVibe833@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <span className={cx('bold')}>Open: </span>Tuesday to Saturday - 2:00pm - Midnight
                                </p>
                                <p>
                                    <span className={cx('bold')}>Address:</span>
                                    <a
                                        href="https://www.google.com/maps?q=833+Portage+Trail,+Cuyahoga+Falls,+OH+44221"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cx('btn')}
                                    >
                                        833 Portage Trail, Cuyahoga Falls, OH 44221
                                    </a>
                                </p>
                                <p className={cx('method-payment')}>We accept payments via credit card and cash.</p>

                                <p className={cx('social')}>Can't find what you're looking for?</p>
                                <div className={cx('social-icon')}>
                                    <a
                                        href="https://www.facebook.com/Tastethevibe833"
                                        target="_blank"
                                        className={cx('link')}
                                    >
                                        <FontAwesomeIcon icon={faSquareFacebook} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/tastethevibe833"
                                        target="_blank"
                                        className={cx('link')}
                                    >
                                        <FontAwesomeIcon icon={faSquareInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
