import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const Welcome = () => {
    const lang=useContext(LanguageContext)
  return (
    <div>
      <p> {lang==="english"?"Welcome to our app":"स्वागत है आपका"}</p>
    </div>
  )
}

export default Welcome
