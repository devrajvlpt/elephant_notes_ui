import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Space, Table, Tag } from 'antd';




function App() {
  const name = "Tekion TAP Components"
  return (
    <>
    <div className="text-5xl text-red-900 rounded border col-span-4">
        This is the main {name}
    </div>
    </>
  )
}

export default App
