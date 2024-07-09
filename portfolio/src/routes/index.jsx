import { Routes, Route } from 'react-router-dom'
import React from 'react'

import { Home, About, Projects, Contact, Repositories, Private } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/private" element={<Private />} />
    </Routes>
  )
}
