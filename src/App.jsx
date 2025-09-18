//Hooks
import { useState } from 'react'

//componentes
import PrimeiroComponente from './components/FristComponente'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

//Style
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>IFMS</h1>
      <h2>LP4 + REACT</h2>
      <PrimeiroComponente/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events />
    </>
  )
}

export default App
