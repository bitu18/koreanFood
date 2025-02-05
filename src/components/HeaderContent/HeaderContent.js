import classNames from 'classnames/bind';
import styles from './HeaderContent.module.scss';

const cx = classNames.bind(styles);
function HeaderContent({ title, des }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <p className={cx('des')}>{des}</p>
        </div>
    );
}

export default HeaderContent;
