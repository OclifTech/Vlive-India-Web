import "./App.css";
import React from "react";
import Landing from "./component/layout/landing/landing";
import Navbar from "./component/layout/nav/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "./component/common/blog/blogs/Blogs";
import BlogById from "./component/common/blog/blogById/BlogById";
import Footer from "./component/layout/footer/footer";
import About from "./component/layout/nav/nav-item/about";
import Invester from "./component/layout/nav/nav-item/invester";
import Contact from "./component/layout/nav/nav-item/contact";
import Career from "./component/layout/nav/nav-item/career";
import Media from "./component/layout/nav/nav-item/media";
import Association from "./component/layout/nav/nav-item/2-item/association";
import Team from "./component/layout/nav/nav-item/2-item/team";
import Venture from "./component/layout/nav/nav-item/2-item/venture";
import Businesses from "./component/layout/nav/nav-item/2-item/business";

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refreshHard();
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Routes>
          <Route path="blogs/blog/id" element={<BlogById />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/invester" element={< Invester />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/career" element={<Career />} />
        </Routes>
        <Routes>
          <Route path="/media" element={<Media />} />
        </Routes>
        <Routes>
          <Route path="/association" element={<Association />} />
        </Routes>
        <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
        <Routes>
          <Route path="/businesses" element={<Businesses />} />
        </Routes>
        
        <Routes>
          <Route path="/venture" element={<Venture />} />
        </Routes>
        <Footer  />
      </Router>
    </div>
  );
}

export default App;
