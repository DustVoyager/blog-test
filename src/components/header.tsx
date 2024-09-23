import Link from "next/link";

export default function Header() {
  return (
    <header className="flex my-10 md:mb-10 items-center font-mono">
      <h1 className="text-xl whitespace-nowrap font-bold">
        <Link href="/">Dust Voyager</Link>
      </h1>

      <nav className="text-xs grow flex justify-end items-center">
        <ul className="flex gap-2 md:gap-3">
          <li className="inline-flex">
            <Link
              href="/about"
              className="hover:text-white hover:bg-blue-400 active:bg-blue-500 rounded-sm p-2 transition-[background-color]"
            >
              About
            </Link>
          </li>
          <li className="inline-flex">
            <Link
              href="/post"
              className="hover:text-white hover:bg-blue-400 active:bg-blue-500 rounded-sm p-2 transition-[background-color]"
            >
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
