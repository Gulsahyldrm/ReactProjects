import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
