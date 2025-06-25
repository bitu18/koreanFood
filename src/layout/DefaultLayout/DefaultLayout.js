import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Contact from '~/components/Contact';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className={cx('content')}>{children}</div>
            <Contact />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
