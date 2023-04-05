import './App.css';
import Landing from './pages/landing';
import Compare from './pages/compare';
import Timeline from './pages/timeline';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing/> }/>
      <Route path='/time' element={<Timeline/> }/>
      <Route path='/compare' element={<Compare/> }/>
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;
