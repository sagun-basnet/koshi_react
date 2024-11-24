import React from 'react'
import Button from './Button'

const Home = () => {
    return (
        <div>
            <h1>Welcome to my home page</h1>
            <Button text="More" color="bg-red-500" hover="hover:bg-red-700" />
        </div>
    )
}

export default Home