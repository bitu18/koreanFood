import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('inner')}>
                    <a href="#home">
                        <img src={images.logo} alt="logo" className={cx('logo')} />
                    </a>

                    <ul className={cx('list')}>
                        <li className={cx('list-item')}>
                            <a href="/#about">About Us</a>
                        </li>
                        <li className={cx('list-item')}>
                            <Link to="/menu">view our menu</Link>
                        </li>
                        <li className={cx('list-item')}>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
