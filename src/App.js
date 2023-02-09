import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NextPage from './components/NextPage';
import Sign from './components/Sign';

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/home" element={<Sign />}/>
          <Route path="/next" element={<NextPage />}/>
        </Routes>
      </Router>
        
        
     
   
    
    
    </>
  );
}

export default App;
