import './App.css';
import Home from './Components/Home';
import Navbar from './Nabvar';
import Add from './Users/Add';
import EditUser from './Users/EditUser';
import View from './Users/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/user/add' element={<Add/>} />
    <Route path='/user/edit/:id' element={<EditUser/>} />
    <Route path='/view/:id' element={<View/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
