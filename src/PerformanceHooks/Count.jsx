import React from 'react'

const Count = ({text,number}) => {
    console.log(`${text}`)

  return (
    <div>
      <h1> {text}:{number}</h1>
    </div>
  )
}

export default React.memo(Count)
