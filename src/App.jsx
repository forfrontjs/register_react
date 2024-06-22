import React from 'react'
import './App.scss'
import { useState, useEffect } from 'react'

export default function App() {
      const [name, Setname] = useState('')
      const [email, Setemail] = useState('')
      const [password, Setpassword] = useState('')
      
      const Show = (e)=>{
        e.preventDefault()
        const Data = [
          name,
          email,
          password
        ]
        console.log(Data);
      }
  return (
    <div className="sign">
            <div className='sign__form'>
                <input onChange={(e)=>Setname(e.target.value)} type="text"  placeholder='Enter your name...'/>
                <input onChange={(e)=>Setemail(e.target.value)} type="email" placeholder='Enter your email...' />
                <input onChange={(e)=>Setpassword(e.target.value)} type="text" placeholder='Enter your password...' />
                <div className="sign__box">
                  <button onClick={Show} className='sign__btn'>Sign up</button>
                </div>
            </div>
      </div>
  )
}

