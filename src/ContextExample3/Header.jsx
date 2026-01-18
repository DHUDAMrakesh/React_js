import React from 'react'
import { LanguageContext } from './LanguageContext';
import Welcome from './Welcome';
const Header = () => {
  return (
    <div>
      <LanguageContext.Provider value={"english"} >
<Welcome />
      </LanguageContext.Provider>
    </div>
  )
}

export default Header
