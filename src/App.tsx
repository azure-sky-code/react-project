import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar'
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Work1 = lazy(() => import('@/pages/portfolio/Work1'))
const Work2 = lazy(() => import('@/pages/portfolio/Work2'))
const Work3 = lazy(() => import('@/pages/portfolio/Work3'))
const Contact = lazy(() => import('@/pages/Contact'))
import '@/app.css'

function App() {
    return (
        // basename 須與 Vite 設定的 base 一致
        <BrowserRouter basename="/react-project">
            <header>
                <Link className="logo" to="/" />
                <NavBar />
            </header>
            <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/work1" element={<Work1 />} />
                <Route path="/portfolio/work2" element={<Work2 />} />
                <Route path="/portfolio/work3" element={<Work3 />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
