import Navbar from "./Components/Common/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import CoursesDetails from "./Components/Courses/CoursesDetails"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import BlogDetails from "./Pages/BlogDetails"
import Placements from "./Pages/Placements"
import Faq from "./Pages/Faq"
import Reviews from "./Pages/Reviews"
import Footer from "./Components/Common/Footer"
import Login from "./Pages/Login"

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/course/:id" element={<CoursesDetails />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:id" element={<BlogDetails />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/placements" element={<Placements />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/faq" element={<Faq />}/>

          {/* Login */}
          <Route path="/login" element={<Login />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
