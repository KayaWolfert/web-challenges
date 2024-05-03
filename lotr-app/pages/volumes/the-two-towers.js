import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function twoTowers() {
  const twoTowersData = volumes.find(({ slug }) => slug === "the-two-towers");
  

  return (
    <>
      <Link href="/volumes">go back to Volumes </Link>
      <h1> {twoTowersData.title}</h1>
      <p> {twoTowersData.description}</p>
      <ul>
        {" "}
        {twoTowersData.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} , {book.title}
          </li>
        ))}
      </ul>
      <Image 
    src="/images/the-two-towers.png"
    height={230}
    width={140}
    alt="image of bookcover"
  />
    </>
  );
}
