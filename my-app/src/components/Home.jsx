import React from 'react'
import { useState } from 'react'
import Hero from './Hero'
const Home = () => {
    const [value,setValue]= useState("")
  return (
   <>
    <Hero/>
    <div className="container">
        <h1>Join Meeting</h1>
        <div>
            <input 
                type="text"
                placeholder='Generate Meeting ID' 
                value={value} 
                onChange= {(e)=>setValue(e.target.value)}
            />
            <button disabled={!value}>Join Meeting</button>
        </div>
    </div>
   </>
  )
}

export default Home