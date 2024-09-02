import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-slate-900 py-6 flex items-center justify-center min-h-screen">
      <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 shadow-lg max-w-md mx-auto">
        <Image
          className="h-40 rounded-full mx-auto object-cover"
          src="/mubi1.JPG"
          alt="Portrait of Mubeen Ahmad"
          width={150} height={240}
        />
    

        <div className="text-center mt-6">
          <h2 className="text-xl font-semibold text-gray-100">About Me</h2>
          <p className="text-md text-gray-400 mt-2">
            I am passionate about AI and technology, eager to learn and apply my knowledge in real-world scenarios. My goal is to contribute to innovative projects that make a difference.
          </p>
        </div>

        <figcaption className="text-center mt-4">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            Mubeen Ahmad
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI Student, Mubeen Ahmad
          </div>
        </figcaption>



      </figure>
    </div>
  );
}

export default Page;
