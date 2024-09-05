import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import CreateTaskPage from "./pages/Createtask";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
