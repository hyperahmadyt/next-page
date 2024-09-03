import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-slate-900 py-6 flex items-center justify-center min-h-screen">
      <div className="text-center text-white space-y-4">
        <h1 className="text-3xl font-bold">Welcome to My project</h1>
        <p className="text-lg">click these links below to see my work</p>
        <nav className="space-x-4">
          <Link href="/About" className="text-blue-500 hover:underline">
            About Me
          </Link>
          <Link href="/Contact" className="text-blue-500 hover:underline">
            Contact Information
          </Link>
          <Link href="/Address" className="text-blue-500 hover:underline">
            Home Address
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
