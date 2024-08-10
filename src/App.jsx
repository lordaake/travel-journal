import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Data from "./components/Data"
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  const TravelData = Data.map(destination => {
    return (
      <Body
        key={destination.id}
        destination={destination}
      />
    )
  })

  return (
    <>
      <Header />
      {TravelData}
    </>
  )
}

export default App
