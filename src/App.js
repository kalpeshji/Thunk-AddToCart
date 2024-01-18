import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Thunk/Component/Header'
import Home from './Thunk/Component/Home'
import About from './Thunk/Component/About'
import Product from './Thunk/Component/Product'
import Cart from './Thunk/Component/Cart'
import store from './Thunk/Component/Files/Store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='w-100'>
          <Header />
        </div>
        <Routes >
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/product" element={<Product />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path='*' element={<h1 className='text-center mt-6 text-white '>404 Page Error...</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
