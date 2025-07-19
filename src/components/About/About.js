import classNames from 'classnames/bind';
import styles from './About.module.scss';
import HeaderContent from '../HeaderContent';
import images from '~/assets';

const cx = classNames.bind(styles);
function About() {
    return (
        <div id="about" className={cx('wrapper')}>
            <div className={cx('about')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <HeaderContent title="the vibe" des="We love atmosphere" />

                            <p className={cx('text')}>
                                We are a food truck serving authentic Vietnamese and American street food, blending bold
                                flavors with a laid-back vibe. Our mission is to bring fresh, exciting flavors to the
                                city while creating a safe and welcoming space for people to hang out — especially at
                                night. We’re proudly located in the same parking lot as our sister business, Nail The
                                Vibe, making our space a vibrant local destination for food, fun, and connection. In
                                addition to daily service, we also host events right here at our parking lot — from
                                casual get-togethers to private parties. If you're looking for a unique spot to
                                celebrate, just send us an inquiry and we’ll help make it happen.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('slider-img')}></div>
            </div>
        </div>
    );
}

export default About;
