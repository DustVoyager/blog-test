import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">Dust Voyager</Link>
      </h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="resume">Resume</Link>
        </li>
      </ul>
    </header>
  );
}
