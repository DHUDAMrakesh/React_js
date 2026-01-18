import React from 'react'
import Navbar from './Navbar';
import Categories from './Categories';
export const themecontext = React.createContext();
const HomeComponent = () => {
    const theme="light"
  return (
    <div>
        <themecontext.Provider value={theme}>

        <Categories />

        </themecontext.Provider>
        <Navbar />
    </div>
  )
}

export default HomeComponent
