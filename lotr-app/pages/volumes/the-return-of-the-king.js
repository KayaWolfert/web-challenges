import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function ReturnoftheKing() {
  const ReturnoftheKingData = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href="/volumes">go back to Volumes </Link>
      <h1> {ReturnoftheKingData.title}</h1>
      <p> {ReturnoftheKingData.description}</p>
      <ul>
        {" "}
        {ReturnoftheKingData.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} , {book.title}
          </li>
        ))}
      </ul>
      <Image 
    src="/images/the-return-of-the-king.png"
    height={230}
    width={140}
    alt="image of bookcover"
    
  />
    </>
  );
}
