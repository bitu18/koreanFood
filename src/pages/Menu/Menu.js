import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import images from '~/assets';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <img src={images.menu} alt="menu" className={cx('menu')} />
            </div>
        </div>
    );
}

export default Menu;
