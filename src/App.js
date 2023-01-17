import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditPage, HomePage } from "./pages";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="edit" element={<EditPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
