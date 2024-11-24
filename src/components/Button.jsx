import React from 'react'
import './style.css'
const Button = ({ text, color, hover }) => {

    // console.log(props.text);
    return (
        <>
            {color === "bg-red-500" && <h1>This is red button</h1>}


            <button className={`p-2 px-4 ${color} ${hover} rounded-md`}>{text}</button>
        </>
    )
}
export default Button