import React from 'react'
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <div className='flex-shrink-0'>
        <div className='flex items-center space-x-3'>
          <Image
            src='/images/bio-training-logo.png'
            alt='Bio Training Logo'
            width={40}
            height={40}
            className='w-10 h-10'
          />
          <span className='text-white font-bold text-xl'>BIO TRAINING</span>
        </div>
      </div>
    </div>
  );
}

export default Logo
