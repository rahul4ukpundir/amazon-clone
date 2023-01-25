
import './App.css';

import Header from './Header';
import Sidbar from './Sidbar';
import Products from './Products';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Carts from './Carts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className="app_header">
            <Header />
            <div className='app_body'>
              <Sidbar />
              <Products />
            </div>
          </div>
        } />
        <Route  path='/checkout' element ={<Carts />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
