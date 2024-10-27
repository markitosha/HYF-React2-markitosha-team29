'use client';

import { useRef, useEffect } from "react";
import Button from '@mui/material/Button';

export default function Page() {
    const myRef = useRef(null);

    useEffect(() => {
        console.log(myRef.current);
        myRef.current.focus();

        // myRef.current.addEventListener();
        // setTimeout

        return () => {
            // myRef.current.removeEventListener();
            // clearTimeout
        }
    }, []);

    return <form>
        <input name={'test'} />
        <input name={'test2'} ref={myRef} />
        <input name={'test4'} />
        <Button variant="contained">TEST</Button>
    </form>
}
