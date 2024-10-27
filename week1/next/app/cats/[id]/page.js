export default async function Cat({ params }) {
    const data = await params;
    const cat = await fetch(`http://localhost:3000/api/cats/${data.id}`).then(res => res.json());

    if (cat.error) {
        return <h1>{cat.error}</h1>;
    }

    return <div>
        <h1>Hello, This is {cat.name}</h1>
        <div>Age: {cat.age}</div>
    </div>;
}