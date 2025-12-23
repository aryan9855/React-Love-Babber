import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// to do something that is diffrent from the regular flow of the app is called side effect 
// and we can use useEffect hook to do that
  const [text, setText] = useState('')

useEffect(() => {
  console.log('useEffect called')
},[text ])


  const changeHandler = (event) => {
    console.log(text)
    setText(event.target.value)
  }

  return (
    <div className='App'>
      <input type="text"  onChange={changeHandler}/>

    </div>
    
  )
}

export default App
