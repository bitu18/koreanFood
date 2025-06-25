import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                </Routes>
            </DefaultLayout>
        </BrowserRouter>
    );
}

export default App;
