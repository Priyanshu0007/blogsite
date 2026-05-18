import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className=' mt-20 mb-8 p-12 relative rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow-xl drop-shadow-md rounded-2xl text-slate-800 transition-all duration-300 hover:bg-white/30 '>
      <div className='absoulte left-0 right-0 -top-14'>
      <Image
        unoptimized
        alt={author.name || 'Author'}
        height={100}
        width={100}
        className="align-middle rounded-full object-cover "
        src={author.photo.url}/>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
      </div>
    </div>
  )
}

export default Author