export default async function Meals({ params, searchParams }) {
    const { id } = await params;
    const { test } = await searchParams;

    return <div>Meals page {id}: {test}</div>
}