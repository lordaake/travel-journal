import './App.css'
import Header from './components/Header'
import Data from "./components/Data"
import Body from './components/Body'

function App() {

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