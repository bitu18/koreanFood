import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import About from '~/components/About';
import Slider from '~/layout/components/Slider';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <About />
        </div>
    );
}

export default Home;
