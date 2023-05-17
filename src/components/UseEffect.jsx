import React, { useState, useEffect } from "react";

const UseEffect = () => {
    
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [resourceType])

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType)
    }


    // // componentsDidMount
    // useEffect(() => {
    //     console.log('componentDidMount')
    // }, [])


    // // componentWillAmount
    // useEffect(() => {
    //     return () => {
    //         console.log('componentWillAmout')
    //     }
    // }, [])


    return ( 
        <div>
            <h1>{resourceType}</h1>
            <div>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>
            <p>{resourceType.title}</p>
        </div> 
    );
}
 
export default UseEffect;