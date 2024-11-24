import Link from "next/link";

export default function HomePage() {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to the Blog!</h1>
      <p className="mt-4 text-xl">
        Check out our latest articles on natural healing plants and wellness.
      </p>
      <Link href="/blogs">
        <button className="mt-8 p-2 bg-blue-500 text-white rounded">
          See All Blogs
        </button>
      </Link>
    </main>
  );
}
