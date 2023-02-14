import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Private } from './components/Private';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
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
