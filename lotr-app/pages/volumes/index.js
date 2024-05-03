import { introduction } from "@/lib/data";
import Link from "next/link";

export default function VolumeIndex() {
  return (
    <>
      <h1> Lord of the Rings</h1>
      <p> {introduction}</p>
      <h2> all Volumes</h2>
      <ul>
        <li>
          {" "}
          <Link href="/volumes/the-fellowship-of-the-ring">
            {" "}
            the fellowship of the Ring
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/volumes/the-two-towers"> the 2 towers</Link>
        </li>
        <li>
          {" "}
          <Link href="/volumes/the-return-of-the-king">
            {" "}
            the return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}
