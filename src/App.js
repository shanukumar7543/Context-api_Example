import logo from './logo.svg'
import './App.css'
import Child1 from './Child1'
import Child2 from './Child2'
import { createContext, useState } from 'react'

export const GlobalInfo = createContext()
function App() {
  const [bg, setBg] = useState('yellow')
  const [price, setPrice] = useState(500)

  //  functon for get the data from the children
  const getAmount = (amount) => {
    console.log(amount)
    setPrice(amount)
  }

  return (
    <GlobalInfo.Provider value={{ bg_Color: bg, getAmount: getAmount }}>
      <div className="App">
        <h1>Home Page :{price}</h1>
        <Child1 />
        <Child2 />
      </div>
    </GlobalInfo.Provider>
  )
}

export default App
