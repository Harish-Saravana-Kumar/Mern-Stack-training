import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import Newbook from './Newbook';
import Oldbook from './Oldbook';
import Login from './Login';
import Form from './Form';
import Users from './Users';
import Fruits from './Fruits';
import FruitForm from './FruitForm';
import Array from './Array';
import ResetArray from './ResetArray';

function App() {
  return (
    <>
   <h1>Hello</h1>
   <BrowserRouter>
   <Link to='/'>Home</Link><br/>
   <Link to='/aboutus'>About Us</Link><br/>
   <Link to='/contactus'>Contact Us</Link><br/>
   <Link to='/admin/898989890'>Admin</Link><br/>
   <Link to='/books/New-book'>New-book</Link><br/>
   <Link to='/books/Old-book'>Old-book</Link><br/>
   <Link to='/Login'>Login</Link><br/>
   <Link to='/sign_up'>Sign up</Link><br/>
   <Link to='/Users'>Users</Link><br/>
   <Link to='/fruitForm'>Fruit Form</Link><br />
   <Link to='/Fruits'>Fruits</Link><br/>
   <Link to ='/array'>Array</Link><br/>
   <Link to ='/resetArray'>Reset Array</Link><br/>
   
    <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/aboutus'element={<About/>}></Route>
    <Route path='/contactus'element={<Contact/>}></Route>
    <Route path='/admin/:id'element={<Admin/>}></Route>
    <Route path='/sign_up' element={<Form/>}></Route>
    <Route path='/Users' element={<Users/>}></Route>
    <Route path='/fruitForm' element={<FruitForm />} />
    <Route path='/Fruits' element={<Fruits/>}></Route>
    <Route path='/array' element={<Array />}></Route>
    <Route path='/resetArray' element={<ResetArray />}></Route>
    <Route path='/books'>
    <Route path='New-book'element={<Newbook/>}></Route>
    <Route path='Old-book'element={<Oldbook/>}></Route>
    </Route>
    <Route path='/Login'element={<Login/>}></Route>
    <Route path='/dashboard'element={<dashboard/>}></Route>
   </Routes>
   </BrowserRouter>
   </> 
  );
}

export default App;