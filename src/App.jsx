// App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/page/Home'
import About from './assets/page/About'
import Contact from './assets/page/Contact'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App