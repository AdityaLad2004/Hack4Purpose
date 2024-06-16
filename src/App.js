import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Router,Routes,Link} from 'react-router-dom'
import Home from './pages/Home';
import Patients from './pages/Patients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/patients' element={<Patients/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
