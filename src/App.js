import React from 'react';

import { GridCSS } from './components/Styles';
import Header from './components/Header';
import Slider from './components/Slider';
import Content from './components/Content';
function App() {
    return (
        <GridCSS>
            <div className={'wrapper'}>
                <Header />
                <Slider />
                <Content />
            </div>
        </GridCSS>
    );
}

export default App;
