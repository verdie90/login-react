import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Addusers from "./pages/Addusers";
import Edituser from "./pages/Edituser";
import Products from "./pages/Products";
import Addproduct from "./pages/Addproduct";
import Editproduct from "./pages/Editproduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/add' element={<Addusers />} />
        <Route path='/users/edit/:id' element={<Edituser />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product/add' element={<Addproduct />} />
        <Route path='/product/edit/:id' element={<Editproduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
