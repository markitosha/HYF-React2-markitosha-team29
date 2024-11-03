import { useEffect, useState } from "react";

const apiKey = '';

export default async function Home({ error }) {
  // const data = await fetch(...);
  //
  // const className = clsx({
  //   'error': error,
  //   'here': otherCondition,
  // }, 'input');

  return (
    <h1 className={`${error ? 'error' : ''} input`}>Home</h1>
  );
}
