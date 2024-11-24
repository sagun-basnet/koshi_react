import React, { useEffect, useState } from 'react'

const MyComponent = () => {

    const [login, setLogin] = useState(false);

    const handleLogin = (num) => {
        setLogin(true);
    }
    console.log(login);


    handleLogin(2);

    return (
        <div className='flex flex-col w-full'>
            <nav className='flex justify-end p-4 bg-slate-700'>
                {
                    login ?
                        <button className='bg-red-400 hover:bg-red-600 h-[] p-2 px-4 rounded-md'>Logout</button> :
                        <button className='bg-blue-400 hover:bg-blue-600 p-2 px-4 rounded-md'>Sign in</button>

                }
            </nav>
            <div className="w-full flex justify-center">
                <button className='bg-green-400 hover:bg-green-600 p-2 px-4 rounded-md' onClick={handleLogin(2)}>Login</button>
            </div>
        </div>
    )
}

export default MyComponent