'use client';

import { addData } from "@/app/todo/action";
import { useActionState } from "react";

export default function AddForm() {
    const [state, action, pending] = useActionState(addData, '');

    return (
        <form action={action}>
            <input name={'text'}/>
            <button type={'submit'}>Add</button>
            {state && state.error && <p style={{ color: 'red' }}>{state.error}</p>}
        </form>
    )
}
