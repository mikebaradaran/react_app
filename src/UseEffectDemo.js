import React, { useState, useEffect } from "react";

function UseEffectDemo() {
    const [course, setCourse] = useState('React');

    console.log('Page rendered');

    useEffect(
        ()=>console.log('Course changed')
    , [course]);

    return (
        <>
            <h1>{course}</h1>
        </>
    );
}

export default UseEffectDemo;