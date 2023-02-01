import { useState } from 'react'
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { Heroes } from './pages/Heroes';
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/heroes" />} />
          <Route path="/heroes/:heroId?" element={<Heroes />} />
      </Routes>
  </HashRouter>
  )
}

export default App
