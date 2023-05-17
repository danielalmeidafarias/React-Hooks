import React from "react";
import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('dark')

    const incrementCount = () => {
        setCount((prevState) => {
            return prevState + 1
        })
        
        setTheme((prevState) => {
            prevState == 'dark' ? prevState = 'light' : prevState = 'dark'
            return prevState
        })
    }

    // const [state, setState] = useState({count: 0, theme: 'light'})

    // const incrementCount = () => {
    //     setState((prevState) => {
    //         return {
    //             ...prevState,
    //             count: prevState.count + 1,
    //             theme: 'dark',
    //         }
    //     })
    // }

    return (

        <div>
            <h1>{count}</h1>
            <h1>{theme}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div> 

    );
}
 
export default UseState;