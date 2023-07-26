// -------------- detail page contents --------------

import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function volume1() {
  const volume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume1.title}</h1>
      <p>{volume1.description}</p>
      <ul>
        {volume1.books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} {title}
          </li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers">→ next</Link>
    </>
  );
}
