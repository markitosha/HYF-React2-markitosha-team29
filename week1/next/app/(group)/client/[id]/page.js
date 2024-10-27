
export default async function Home({ params }) {
  const data = await params;

  return (
    <h1>Hello Id {data.id}</h1>
  );
}
