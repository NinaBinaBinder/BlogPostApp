"use client";

import Link from "next/link";

export default function error() {
  return (
    
      <div className="card grid justify-center">
        <p className="h1 m-0">Sowwyy we couldn´t find the Post</p>
        <Link href="/">
        <button className="btn-primary m-auto ">go Back</button>
        </Link>

      </div>
  
  );
}
