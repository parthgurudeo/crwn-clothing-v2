import {Routes,Route, Outlet} from 'react-router-dom'
import Home from './../src/routes/homePage/home-page';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/signin/signin.component';
import Shop from './routes/shop/shop';

const App = () => {
 
  return (
   <Routes>
    <Route path='/'element={<Navigation/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>


    </Route>
 

 
   </Routes> 
 
     
   
  );
};

export default App;
