// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './assets/css/reg.css'
// import './App.css';
// import Home from "./components/Home";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Signuppage from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
     {/* <Home/> */}
     {/* <Login/> */}
     <BrowserRouter>
     <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Signuppage/>}/>
        <Route path="/Signuppage" element={<Signuppage/>}/>
     </Routes>
     </BrowserRouter>
       </div>
    </>
  )
}

export default App;
