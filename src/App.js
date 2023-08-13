import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseDetail from './components/pages/ExerciseDetail'
import { Home } from '@mui/icons-material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1448px'}}}m="auto">
      <Navbar />
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/" elements={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>

  )
}

export default App
