import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import images from '~/assets';
import About from '../About';
import HeaderContent from '../HeaderContent';
import Contact from '../Contact';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <About />
            <div id="menu" className={cx('menu')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12">
                            <HeaderContent title="Our Menu" des="We love food" />

                            <div className="row">
                                <div className="col l-4">
                                    {/* <p className={cx('name')}>Sweet Corn</p> */}
                                    <img src={images.cornMenu} alt="corn" className={cx('img')} />

                                    <div className={cx('detail')}>
                                        <h3 className={cx('name')}>Sweet Corn</h3>
                                        <p className={cx('des-food')}>
                                            Sweet and juicy corn , brushed with savory butter, dusted with cheese, and
                                            drizzled with our flavorful sauces for the perfect balance of creamy,
                                            deliciousness, and tangy.
                                        </p>
                                    </div>
                                </div>
                                <div className="col l-4">
                                    {/* <p className={cx('name')}>Potato</p> */}
                                    <img src={images.potatoMenu} alt="potato" className={cx('img')} />
                                    <div className={cx('detail')}>
                                        <h3 className={cx('name')}>Crispy</h3>
                                        <p className={cx('des-food')}>
                                            spiral-cut tornado potatoes fried to golden perfection, seasoned with bold
                                            flavors, and served as a fun, tasty twist on a classic snack.
                                        </p>
                                    </div>
                                </div>
                                <div className="col l-4">
                                    {/* <p className={cx('name')}>Waffles</p> */}
                                    <img src={images.wafflesMenu} alt="waffles" className={cx('img')} />
                                    <div className={cx('detail')}>
                                        <h3 className={cx('name')}>붕어빵</h3>
                                        <p className={cx('des-food')}>
                                            붕어빵, which we call our Korean waffles, are fish-shaped waffles with a
                                            golden crust and a soft, fluffy inside, generously filled with rich and
                                            creamy custard for a deliciously sweet treat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col l-12">
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Content;
