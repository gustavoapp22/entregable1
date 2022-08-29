import { useState } from 'react'


import QuoteBox from './jason/users.json'
import CardUsers from './components/CardUsers'
import colors from './utils/colors'

function App() {


  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let userRandom = getRandomElement(QuoteBox)
  let colorRadom = getRandomElement(colors)

  const [randomUser, setRamdomUser] = useState(userRandom)
  const [randomColors, setRandomColors] = useState(colorRadom)

  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    const userRandom = getRandomElement(QuoteBox)
    const colorRadom = getRandomElement(colors)

    setRamdomUser(userRandom)
    setRandomColors(colorRadom)
  }


  return (
    <div className="App" style={objStyle}>
      <CardUsers
        randomUser={randomUser}
        randomColors={randomColors}
        getRandomAll={getRandomAll}
      />

    </div>
  )
}

export default App
