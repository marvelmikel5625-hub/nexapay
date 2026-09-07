import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

// ========== LANDING PAGE COMPONENTS ==========
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// ========== LANDING PAGE ==========
function LandingPage() {
  // ... keep your entire existing landing page code here ...
  // I'll provide the full combined code below
}
