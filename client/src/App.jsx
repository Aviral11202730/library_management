import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage"
import {Route, Routes ,BrowserRouter} from "react-router-dom";

import Transation from "./pages/transactions";
import Register from "./pages/RegisterPage";
import Reports from "./pages/Reports";


function App() {

  return (
    <BrowserRouter>
    <Routes >
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/transation" element={<Transation />} />
    <Route path="/reports" element={<Reports />} />
    </Routes>
    </BrowserRouter>
  )

}

export default App
