import {Routes,Route} from 'react-router-dom'
import Home from './../src/routes/homePage/home-page';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication.component.jsx';
import Shop from './routes/shop/shop';

const App = () => {
 
  return (
   <Routes>
    <Route path='/'element={<Navigation/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/auth' element={<Authentication/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>


    </Route>
 

 
   </Routes> 
 
     
   
  );
};

export default App;
