'use client';
import Image from "next/image";
import vercelImg from "../public/vercel.svg";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // debugger;
    }, []);

  return (
    <div className={'bg-red-400'}>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
            <Image
              className="dark:invert"
              src={vercelImg.src}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
    </div>
  );
}
