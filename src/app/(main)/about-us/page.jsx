import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          At DailyWire News, our mission is to deliver accurate, unbiased, and
          timely news to our global audience. We cover everything from politics
          and technology to culture and lifestyle, ensuring our readers are
          informed and empowered.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Our team of dedicated journalists and editors work around the clock to
          provide insightful reporting and engaging stories. We believe that
          quality journalism can make a difference, one story at a time.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Integrity and transparency in reporting</li>
            <li>Commitment to accuracy and fairness</li>
            <li>Innovation in digital storytelling</li>
            <li>Engaging with our community responsibly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
