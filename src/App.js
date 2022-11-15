import "./App.css";
import React , {lazy, Suspense}from "react";
 const Landing =lazy(()=> import ( "./component/layout/landing/landing"));
import Navbar from "./component/layout/nav/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Blogs = lazy(()=> import ("./component/common/blog/blogs/Blogs"));
 const BlogById = lazy(()=> import("./component/common/blog/blogById/BlogById"));
import Footer from "./component/layout/footer/footer";
const About = lazy(() => import ( "./component/layout/nav/nav-item/about"));
const Contact = lazy(()=> import( "./component/layout/nav/nav-item/contact"));
const Career = lazy(()=> import( "./component/layout/nav/nav-item/career"));
const Association = lazy(()=> import("./component/layout/nav/nav-item/2-item/association"));
 const Businesses = lazy(()=> import( "./component/layout/nav/nav-item/2-item/business"));
import { PopUpImg } from "./component/layout/nav/nav-item/2-item/gallery";
const Gallery = lazy(()=> import ("./component/layout/nav/nav-item/2-item/gallery") )

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refreshHard();
  }, []);

  return (
    <div className="app">
      <Suspense >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/career" element={<Career />} />
        </Routes>
        <Routes>
          <Route path="/association" element={<Association />} />
        </Routes>
        <Routes>
          <Route path="/businesses" element={<Businesses />} />
        </Routes>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Routes>
          <Route path="/gallery/:id" element={<PopUpImg />} />
        </Routes>
        <Routes>
          <Route path="/blog/:id" element={<BlogById />} />
        </Routes>
        <Footer />
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
