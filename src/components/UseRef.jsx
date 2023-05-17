import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
    
    const [name, setName] = useState('')
    
    const previousName = useRef()

    useEffect(() => {
        previousName.current = name
    }, [name])

    return ( 
        <div>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello! My name is {name}</p>
            <p>And my name was {previousName.current}</p>
        </div> 
    );
}
 
export default UseRef;