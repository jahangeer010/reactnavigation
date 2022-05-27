  // import logo from './logo.svg';
  // import './App.css';
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (

  <BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Profile/:id" element={<Profile/>}/>
  <Route path="Signup" element={<Signup/>}/>
  {/* there are four api  get post delete edit put  */}

</Routes>

  </BrowserRouter>
   
   

  );
}

export default App;
