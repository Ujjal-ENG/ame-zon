import React from 'react';
import Header from './layouts/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Error from './components/Error';
import OrderReview from './components/OrderReview';
import Login from './components/Login';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/order-review" element={<OrderReview />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
