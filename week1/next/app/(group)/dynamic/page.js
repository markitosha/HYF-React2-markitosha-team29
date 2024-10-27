import { connection } from "next/server";

export default async function Home() {
  await connection();

  const number = Math.random() * 100;

  console.log('Where is this console.log? Dynamic', number);

  return (
    <h1>Hello Dynamic Page {number}</h1>
  );
}
