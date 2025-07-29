import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card.jsx'
import Header from './components/Header.jsx'
import './index.css'

function App() {

  return (
    <>
      <div class="flex flex-col h-full w-full">
        <Header/>
        <div class="flex flex-row p-4 gap-4 w-full h-full flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    </>
  )
}

export default App
