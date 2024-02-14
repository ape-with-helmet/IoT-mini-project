import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Signup from './Pages/Signup'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<Signup/>} path='/Signup'/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
