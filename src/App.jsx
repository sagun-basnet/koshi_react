import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1)
  }

  const sub = () => {
    count === 0 ? setCount(count) : setCount(count - 1);

  }

  return (
    <>
      <div className='flex gap-4 justify-center items-center h-[100vh]'>
        <button onClick={add} className='p-2 px-4 bg-blue-400 rounded-md hover:bg-blue-600 text-white'>Add</button>
        <span className='text-[2rem]'>{count}</span>

        {
          count === 0 ? <></> :
            <button onClick={sub} className='p-2 px-4 bg-red-400 rounded-md hover:bg-red-600 text-white'>Sub</button>
        }
      </div >


    .
    </>

  )
}

export default App