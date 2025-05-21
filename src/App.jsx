import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ReservationSchedule from './pages/ReservationSchedule';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resevationschedule' element={<ReservationSchedule />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
