
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Patients from './pages/Patients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patients' element={<Patients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
