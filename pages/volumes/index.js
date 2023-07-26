// -------------- overview page contents --------------

import { introduction } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Overview() {
  return (
    <>
      <h1>Lord of the rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="pages/volumes/the-fellowship-of-the-ring/the-fellowship-of-the-ring.js">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="pages/volumes/the-two-towers/the-two-towers.js">
            The two towers
          </Link>
        </li>
        <li>
          <Link href="pages/volumes/the-return-of-the-king/the-return-of-the-king.js">
            The return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}
