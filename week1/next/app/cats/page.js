// 'use client';

import Link from "next/link";
// import { useRouter } from "next/navigation";

export default async function Page() {
    // const router = useRouter();

    const cats = await fetch('http://localhost:3000/api/cats').then(res => res.json());

    return <div>
        <h1>Cats page</h1>
        {/*<button onClick={() => router.push('/server')}>Go to the server!</button>*/}
        {cats.map(cat => (
            <button key={cat.id}>
                {cat.name} is {cat.age} years old
                <Link href={`/cats/${cat.id}`}>Go to</Link>
            </button>
        ))}
    </div>
};
