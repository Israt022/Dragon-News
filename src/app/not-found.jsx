import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        {/* Logo / Site Name */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Dragon News
        </h1>

        {/* 404 */}
        <h2 className="text-7xl font-extrabold text-red-600 mb-4">404</h2>

        {/* Headline */}
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          The article you’re looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Go to Homepage
          </Link>

          <Link
            href="/latest"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Latest News
          </Link>
        </div>

        {/* Optional Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
