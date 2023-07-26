// -------------- detail page contents --------------

import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function volume2() {
  const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume2.title}</h1>
      <p>{volume2.description}</p>
      <ul>
        {volume2.books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} {title}
          </li>
        ))}
      </ul>

      <Link href="/volumes/the-fellowship-of-the-ring">← previous</Link>
      <Link href="/volumes/the-return-of-the-king">→ next</Link>
    </>
  );
}
