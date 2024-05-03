import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Fellowship() {
  const fellowshipData = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  

  return (
    <>
      <Link href="/volumes">go back to Volumes </Link>
      <h1> {fellowshipData.title}</h1>
      <p> {fellowshipData.description}</p>
      <ul>
        {" "}
        {fellowshipData.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} , {book.title}
          </li>
        ))}
      </ul>

    <Image 
    src="/images/the-fellowship-of-the-ring.png"
    height={230}
    width={140}
    alt="image of bookcover"
  />
    </>
  );
}
