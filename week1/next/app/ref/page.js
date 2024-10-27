'use client';

import { useState, useRef } from "react";

export default function Page() {
    const [state, setState] = useState(0);
    const myVariable = useRef(0);

    const handler = e => {
        console.log('On click');
        setState(prev => prev + 1);
    };

    console.log('rerender', myVariable.current, myVariable);

    return <div>
        <h1>References. State: {state} Ref: {myVariable.current}</h1>
        <button onClick={handler}>UPDATE STATE</button>
        <button onClick={() => {
            myVariable.current += 1;
        }}>UPDATE REF</button>
    </div>
}