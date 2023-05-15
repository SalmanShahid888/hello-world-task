import Login from "./components/LoginScreen/Login";
import Notes from "./components/Notes/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
