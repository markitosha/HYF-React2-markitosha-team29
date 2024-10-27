export default function Home() {
  const number = Math.random() * 100;

  console.log('Where is this console.log? Server', number);

  return (
    <h1>Hello Server Page {number}</h1>
  );
}
