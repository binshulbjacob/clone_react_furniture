import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Front from './Front';
import Shop from './Shop';
import Aboutus from './Aboutus';
import Services from './Services';
import Blog from './Blog';
import Contactus from './Contactus';
import Cart from './Cart';
import Checkout from './Checkout';

function App(){
  return(
    <Router>
    <Routes>
      <Route exact path="/" element={<Front/>}/>
      <Route exact path="/Shop" element={<Shop/>}/>
      <Route exact path="/Aboutus" element={<Aboutus/>}/>
      <Route exact path="/Services" element={<Services/>}/>
      <Route exact path="/Blog" element={<Blog/>}/>
      <Route exact path="/Contactus" element={<Contactus/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>
      <Route exact path="/Checkout" element={<Checkout/>}/>

    </Routes>
    </Router>
  )
}
export default App;
