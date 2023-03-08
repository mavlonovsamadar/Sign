import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import LoginSuccces from './components/LoginSuccces';
import NavbarB from './components/Navbar';
import { Private } from './components/Private';
import Registration from './components/Registration';
import Tablelist from './components/Table';

function App() {
  return (
    <>

      <Router>
      <NavbarB />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LoginSuccces />} />
          <Route path="/table" element={
            <Private>
          <Tablelist />
          </Private>
          } />
          <Route path="/reg" element={<Registration />} />
          <Route path="/home" element={
            <Private>
              <Home />
            </Private>
            
          } />
        </Routes>
      </Router>

    </>
  );
}

export default App;
