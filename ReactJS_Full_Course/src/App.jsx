import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>Number is {num}</h1>
      <button onClick={() => setNum(num + 10)}>Increment</button>
      <button onClick={() => setNum(num - 10)}>Decrement</button>
    </div>
  )
}

export default App