import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </>
  );
}

export default App;
