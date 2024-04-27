import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Lowrate from './pages/Lowrate';
import Summary from './pages/Summary';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Lowrate/>}/>
      <Route path='/summary' element={<Summary/>}/>
    </Routes>
   </Router>
  );
}

export default App;
