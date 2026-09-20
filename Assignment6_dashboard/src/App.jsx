import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Assignments from './pages/Assignments'
import Profile from './pages/Profile'

function App() {
  return (
    <div>
      <Navbar title="Student Hub" />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App