import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-slate-900 py-6 flex flex-col items-center justify-center min-h-screen space-y-6">

      {/* About Me Section */}
      <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 shadow-lg max-w-md mx-auto">
        <Image
          className="h-40 rounded-full mx-auto object-cover"
          src="/mubi1.JPG"
          alt="Portrait of Mubeen Ahmad"
          width={150}
          height={240}
        />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">About Me</h2>
          <p className="text-md text-gray-400 mt-2">
            My name is Mubeen Ahmad, and I am currently learning Artificial Intelligence under the guidance of Sir Asif Langra.
          </p>
          <p className="text-md text-gray-400 mt-2">
            I am passionate about AI and technology, eager to learn and apply my knowledge in real-world scenarios. My goal is to contribute to innovative projects that make a difference.
          </p>
        </div>
      </figure>

      {/* Contact Information Section */}
      <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 shadow-lg max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-100">Contact Information</h1>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400">
              Email: <span className="text-gray-100">hyperahmadyt.com</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400">
              Phone: <span className="text-gray-100">+92 3073827158</span>
            </p>
          </div>
        </div>
      </figure>

      {/* Home Address Section */}
      <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 shadow-lg max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-100">Home Address</h1>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400">
              House Number: <span className="text-gray-100">304-B</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400">
              City: <span className="text-gray-100">Rahim Yar Khan</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400">
              Postal Code: <span className="text-gray-100">64200</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400">
              Country: <span className="text-gray-100">Pakistan</span>
            </p>
          </div>
        </div>
      </figure>

    </div>
  );
}

export default Page;
