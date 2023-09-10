import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className=' mt-20 mb-8 p-12 relative rounded-lg bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
      <div className='absoulte left-0 right-0 -top-14'>
      <Image
        unoptimized
        alt={author.name}
        height={0}
        width={0}
        style={{ width: '100px', height: '100px' }}
        className="align-middle rounded-full object-cover "
        src={author.photo.url}/>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
      </div>
    </div>
  )
}

export default Author