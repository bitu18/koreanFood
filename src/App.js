import React from 'react';

import { GridCSS } from './components/Styles';
import Header from './components/Header';
import Slider from './components/Slider';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
    return (
        <GridCSS>
            <div className={'wrapper'}>
                <Header />
                <Slider />
                <Content />
                <Footer />
            </div>
        </GridCSS>
    );
}

export default App;
