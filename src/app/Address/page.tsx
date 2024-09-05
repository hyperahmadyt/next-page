import React from 'react';
import Image from 'next/image';

const HomeAddress = () => {
  return (
    <div className="bg-slate-900 py-6 flex items-center justify-center min-h-screen">
      <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 shadow-lg max-w-md mx-auto">
        <Image
          className="h-40 rounded-full mx-auto object-cover"
          src="/home.jpg"
          alt="Portrait of Mubeen Ahmad"
          width={150} height={150}
        />

        <div className="text-center mb-6 mt-4">
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

        <figcaption className="text-center mt-4">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            Mubeen Ahmad
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI Student
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default HomeAddress;
