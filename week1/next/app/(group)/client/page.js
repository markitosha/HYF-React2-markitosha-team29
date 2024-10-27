'use client';

export default function Home() {
  const number = Math.random() * 100;

  console.log('Where is this console.log? Client', number);

  return (
    <h1>Hello Client Page {number}</h1>
  );
}
