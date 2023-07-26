// -------------- detail page contents --------------

import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function volume3() {
  const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume3.title}</h1>
      <p>{volume3.description}</p>
      <ul>
        {volume3.books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal}
            {title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="cover of the return of the king"
      >
        {volumes.cover}
      </Image>
      <br />
      <Link href="/volumes/the-two-towers">← previous</Link>
    </>
  );
}
