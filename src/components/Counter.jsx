'use client'
import React, { useState } from 'react';

const Counter = () => {
    const[count, setCount] = useState(0)
    console.log('Counter Component', count)
    return (
        <div>
            <h1 className='text-3xl'>Count : {count} </h1>
            <button onClick={()=>setCount(count + 1)} className='btn'>Increment</button>
        </div>
    );
};

export default Counter;