import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);
function Slider() {
    return (
        <div className={cx('wrapper')} id="home">
            <div className={cx('slider')}></div>
            {/* <div className={cx('content')}>
                <h2>Korean Food</h2>
                <p>Your choice is us choice</p>
            </div> */}
        </div>
    );
}

export default Slider;
