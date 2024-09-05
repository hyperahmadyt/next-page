import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <Link href="/About" className="text-blue-500 hover:underline">
            About Me
          </Link>
          <Link href="/Contact" className="text-blue-500 hover:underline">
            Contact Information
          </Link>
          <Link href="/Address" className="text-blue-500 hover:underline">
            Home Address
          </Link>
    </div>
  )
}

export default Header

