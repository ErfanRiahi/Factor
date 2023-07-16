import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpLogin } from "./SignUpLogin";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpLogin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
