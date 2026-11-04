import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import OurStory from "./pages/OurStory";
import Blog from "./pages/Blog";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính */}
        <Route path="/" element={<Home />} />

        {/* Trang lịch sử Maxim Saigon */}
        <Route path="/our-story" element={<OurStory />} />

        {/* Trang Blog - Maxim Journal */}
        <Route path="/blog" element={<Blog />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;