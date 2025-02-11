import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import Exchanges from './components/Exchanges';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Layout>
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              </Routes>
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              KryptoPulse <br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
