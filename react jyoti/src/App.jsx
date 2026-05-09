import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[count,setcount]=usestate(0)

  return(
    <div>
    
      <Card
      name="sohaman"
      class="12 class"/>
      <br/>
      <Card
      name="sohan"
      class="10 class"/>
        <br/>
      <Card/>
    </div>
  )
}  
export default Card

    