import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính */}
        <Route index element={<Home />} />


        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
