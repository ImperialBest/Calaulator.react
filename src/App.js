import logo from './logo.svg';
import './App.css';
import Introduction from './pages/Introduction/Introduction';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login.js';
import SignUp from './pages/SignUp/SignUp.js';


function App() {
  return (
    <div>
      {/* <Introduc tion/> */}
      {/* <Login/> */}
      <Router>
        <Routes>
          <Route path='/intro' element={<Introduction/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
