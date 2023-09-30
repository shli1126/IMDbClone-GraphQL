import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Hero from './components/hero/Hero'
import WatchList from './components/watchList/WatchList'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/watchlist" element={<WatchList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
