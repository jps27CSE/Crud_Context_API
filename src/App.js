import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
