import { useEffect } from 'react'
import './App.css'
import Form from './form'
import Get from './form/get'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="home">
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/get' element={<Get />} />
      </Routes>
    </div>
  )
}

export default App