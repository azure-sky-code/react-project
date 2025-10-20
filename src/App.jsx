import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Work1 from './pages/portfolio/Work1';
import Work2 from './pages/portfolio/Work2';
import Work3 from './pages/portfolio/Work3';
import Contact from './pages/Contact'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link className="logo" to="/" />
                <NavBar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/work1" element={<Work1 />} />
                <Route path="/portfolio/work2" element={<Work2 />} />
                <Route path="/portfolio/work3" element={<Work3 />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
