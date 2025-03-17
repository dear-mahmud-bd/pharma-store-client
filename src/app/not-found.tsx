import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen px-6 py-12 text-gray-900 bg-gray-100">
      <div className="flex flex-col items-center text-center max-w-2xl space-y-6">
        {/* Large 404 Text */}
        <h1
          className="text-9xl md:text-[220px] font-black text-red-500 select-none"
          aria-hidden="true"
        >
          404
        </h1>

        {/* Message Section */}
        <p className="text-2xl md:text-3xl font-bold">
          Oops! You&apos;ve ventured into unknown territory.
        </p>
        <p className="text-lg text-gray-600">
          The page you&apos;re looking for might have been moved, deleted, or
          never existed. Let&apos;s get you back on track.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md transition-transform duration-200 hover:bg-green-700 hover:scale-105 active:scale-95"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
