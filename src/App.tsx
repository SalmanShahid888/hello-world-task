import Login from "./components/LoginScreen/Login";
import Notes from "./components/Notes/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sessionStorage.setItem(
      "login_account_token",
      JSON.stringify({
        email: "admin@admin.com",
        password: "admin",
      })
    );
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
