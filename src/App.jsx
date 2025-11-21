import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Trust from './Components/Trusts.jsx'
import AttorneyInFact from './Components/AttorneyInFact.jsx'
import EstateAdminLanding from './Components/Estates.jsx'

function App() {
  return (
    <>
      <Trust />
      <AttorneyInFact />
    </>
  )
}

export default App
