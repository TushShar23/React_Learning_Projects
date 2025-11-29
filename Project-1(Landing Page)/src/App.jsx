import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import MainContent from '../Components/MainContent'

function App() {
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
