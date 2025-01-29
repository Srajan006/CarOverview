import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarOverview from './component/UsedCarsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarOverview/>
    </>
  )
}

export default App
