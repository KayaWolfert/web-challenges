import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the City page</h1>
      <Link href="/cities"> go to cities</Link>
    </div>
  );
}
