import React, { useState } from 'react'

const Parent = () => {
  const [username, setUsername] = useState('')
  return (
    <div>
      {username}
      <Child setUsername={setUsername} />
    </div>
  )
}

const Child = ({setUsername}) => {
  return <GrandChildren setUsername={setUsername} />
}

const GrandChildren = ({setUsername}) => {
  return(
    <div>
      <button onClick={() => {
        setUsername("John")
      }}>
        ChangeName
      </button>
    </div>
  )
}

function Example() {
  return (
    <div>Example</div>
  )
}

export default Example