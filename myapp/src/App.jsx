import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
  <Router>
    <Header/>
      <Routes>
        <Route path="/home" element={ <Home/>} />
        <Route path="/about-us" element={ <About/>} />
        <Route path="/contact-us" element={ <ContactUs/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="*" element={ <div>Page Not Found 404</div> } />
      </Routes>
  </Router>
  )
}

export default App;