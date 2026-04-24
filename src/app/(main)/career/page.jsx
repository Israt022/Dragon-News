import React from "react";

const Career = () => {
  const jobOpenings = [
    { id: 1, title: "Senior Journalist" },
    { id: 2, title: "Digital Marketing Specialist" },
    { id: 3, title: "Frontend Developer (Next.js)" },
    { id: 4, title: "Editorial Assistant" },
  ];
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Careers at DailyWire News
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team and be part of a fast-growing, innovative news platform.
          We value creativity, dedication, and integrity, and we are always
          looking for talented individuals.
        </p>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <ul className="space-y-3">
            {jobOpenings.map((job) => (
              <li
                key={job.id}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex justify-between items-center"
              >
                <span className="text-gray-800 font-medium">{job.title}</span>
                <a
                  href="/apply"
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Apply
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
