import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Blogs from "./pages/blogs";
import Footer from "./components/layout/Footer";
import AddBlog from "./pages/addBlog";
import BlogDetails from "./pages/blogDetails";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  //Context
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <section className="hero is-large">
          <Routes>
            <Route path="/" element={user ? <Blogs /> : <Navigate to='/login' />} />
            <Route path="/create" element={user ? <AddBlog /> : <Navigate to='/login' />} />
            <Route path="/:id" element={user ? <BlogDetails /> : <Navigate to='/login' />} />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          </Routes>
        </section>
        <section className="hero is-small">
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
