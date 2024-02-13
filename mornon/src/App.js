import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Homepage from './Pages/Homepage'
import About from './Pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Signup/>} path='/signup'/>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<About/>} path='/about'/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
