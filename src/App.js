import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/login" element={<><Login/></>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 /*
          <Route path="/" element={<><Login/><Home/></>}/>*/ 