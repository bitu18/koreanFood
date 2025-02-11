import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faCopyright} className={cx('icon')} />
            <h4 className={cx('text')}>Taste the Vibe</h4>
        </div>
    );
}

export default Footer;
