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
                        <div className="col l-12">
                            <HeaderContent title="Contact" des="Visit Us" />

                            <div className={cx('text')}>
                                <p>
                                    <span className={cx('bold')}>Phone:</span>
                                    <button className={cx('btn')}>(440) 334-3262</button>
                                </p>
                                <p>
                                    <span className={cx('bold')}>Email:</span>{' '}
                                    <button className={cx('btn')}>TasteTheVibe833@gmail.com</button>
                                </p>
                                <p>
                                    <span className={cx('bold')}>Address:</span>
                                    <button className={cx('btn')}>833 Portage Trail, Cuyahoga Falls, OH 44221</button>
                                </p>
                                <p className={cx('method-payment')}>
                                    We accept payments via credit card, PayPal, or Apple Pay.
                                </p>

                                <p className={cx('social')}>Can't find what you're looking for?</p>
                                <div className={cx('social-icon')}>
                                    <a className={cx('link')}>
                                        <FontAwesomeIcon icon={faSquareFacebook} />
                                    </a>
                                    <a className={cx('link')}>
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
