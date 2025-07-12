import React from 'react'
import Link from 'next/link';

const LinkComponent = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <Link
      href={href}
      className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors'
    >
      {children}
    </Link>
  );
}

export default LinkComponent
