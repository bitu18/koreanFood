import classNames from 'classnames/bind';
import styles from './About.module.scss';
import HeaderContent from '../HeaderContent';

const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx('wrapper')}>
            <div id="about" className={cx('about')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12">
                            <HeaderContent title="the vibe" des="We love atmosphere" />

                            <p className={cx('text')}>
                                At Taste the Vibe, we bring Asian and Korean fusion street food to Cuyahoga Falls with
                                bold flavors and creative twists. Our menu is all about fresh ingredients and
                                unforgettable taste. Located next to our other business, Nail the Vibe, we’re here to
                                serve great food and good vibes. Stop by, taste the vibe, and make it a day to remember!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
