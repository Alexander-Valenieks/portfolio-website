import React from 'react'
import Typewriter from "typewriter-effect";
import './TypeWriter.css';  

const TypeWriter = () => {
   
    return (
        <div className="typewriter">
            <Typewriter
                options={{
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("WEB DEVELOPER")
                        .pauseFor(1800)
                        .deleteAll()
                        .typeString("UX/UI DESIGNER")
                        .pauseFor(2000)
                        .start();
                }}
            />
        </div>
    )
}

export default TypeWriter