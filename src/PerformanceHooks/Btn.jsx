import React from 'react'

const Btn = ({children,clickHandler}) => {
             console.log(`${children} rendered`);

  return (
    <div>
      <button onClick={clickHandler}>{children}</button>

    </div>
  )
}

export default React.memo(Btn)
