import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('inner')}>
                    <a href="#home">
                        <img src={images.logo} alt="logo" className={cx('logo')} />
                    </a>

                    <ul className={cx('list')}>
                        <li className={cx('list-item')}>
                            <a href="#about">About Us</a>
                        </li>
                        <li className={cx('list-item')}>
                            <a href="#menu">view our menu</a>
                        </li>
                        {/* <li className={cx('list-item')}>
                            <a href="#">Menu</a>
                        </li> */}
                        <li className={cx('list-item')}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
