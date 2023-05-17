import React, { useState, useCallback } from "react";
import List from "./callbackComponents/Lists";

const UseCallback = () => {
   
    const [text, setText] = useState('')
    const [resourceType, setResourceType] = useState('posts')

    const getItems = useCallback(async () => {
        console.log('getItems is being called!')
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/${resourceType}`
        )
        const responseJSON = await response.json()

        return responseJSON
    }, [resourceType])
   
    return ( 
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <button onClick={() => setResourceType('todos')}>To dos</button>

            <List getItems={getItems}/>
        </div> 
    );
}
 
export default UseCallback;