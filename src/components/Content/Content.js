import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import images from '~/assets';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <div id="about" className={cx('about')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12">
                            <h2 className={cx('title')}>the vibe</h2>
                            <p className={cx('des')}>We love atmosphere</p>
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
            <div id="menu" className={cx('menu')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12">
                            <h2 className={cx('title')}>Our Menu</h2>
                            <p className={cx('des')}>We love food</p>

                            <div className="row">
                                <div className="col l-4">
                                    <p className={cx('name')}>Corn</p>
                                    <img src={images.cornMenu} alt="corn" className={cx('img')} />
                                </div>
                                <div className="col l-4">
                                    <p className={cx('name')}>Potato</p>
                                    <img src={images.potatoMenu} alt="potato" className={cx('img')} />
                                </div>
                                <div className="col l-4">
                                    <p className={cx('name')}>Waffles</p>
                                    <img src={images.wafflesMenu} alt="waffles" className={cx('img')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
