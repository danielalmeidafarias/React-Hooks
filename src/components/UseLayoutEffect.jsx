import React from "react";
import { useLayoutEffect, useState, useRef } from "react";

const UseLayoutEffect = () => {

    const [show, setShow] = useState(false)

    const popup = useRef()
    const button = useRef()


    // Executa antes da DOM enquato o useEffect executa apos
    useLayoutEffect(() => {
        if(!popup.current || !button.current) return

        const { bottom } = button.current.getBoundingClientRect()

        popup.current.style.top = `${bottom + 25}px`
    }, [show])


    return (
        <div>
            <button 
                ref={button}
                onClick={() => setShow((prev) => !prev)}
            >
                Toggle Modal
            </button>

            {show && (
                <div 
                    style={{position: 'absolute'}}
                    ref={popup}
                >
                    Hello from modal!
                </div>
            )}
        </div>
    )

}
 
export default UseLayoutEffect;