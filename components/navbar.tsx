import React from 'react'
import { Users } from 'lucide-react';
import Logo from './logo';  
import Link from '@/components/link';


const Navbar = () => {
  return (
    <nav className='relative z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Logo />
          {/* Navigation Links */}
          <div className='hidden md:block'>
            <div className='flex items-center space-x-2'>
              <Link
                href='#comunidad'
              >
                COMUNIDAD
              </Link>
              <Link
                href='#blog'
              >
                BLOG
              </Link>
              <Link
                href='#gratis'
              >
                GRATIS
              </Link>
              <Link
                href='#cursos'
              >
                CURSOS
              </Link>
              <Link
                href='#contacto'
              >
                CONTACTO
              </Link>
              <div className='text-gray-300 hover:text-white px-3 py-2 cursor-pointer'>
                <Users className='w-5 h-5' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
