
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center mt-10">
      <h1 className="text-7xl">Hello World</h1>
      <Link className="text-xl bg-blue-700 p-4 border-orange-50 border-2 rounded-lg hover:bg-blue-400" href={'about'}>
      About Page</Link>
    </main>
  );
}
