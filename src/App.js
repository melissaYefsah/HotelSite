// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';
import Footer from'./components/Footer';
import RoomDetailsPage from './pages/RoomDetailsPage';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/room' element={<RoomDetailsPage/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
