import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
const PostCard = ({post}) => {
  return (
    <div className='p-4 lg:p-8 pb-12 mb-8 bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl drop-shadow-lg rounded-3xl text-slate-800 transition-all duration-500 hover:bg-white/40 hover:-translate-y-1'>
        <div className='relative overflow-hidden shadow-lg pb-60 lg:pb-80 mb-6 rounded-t-2xl lg:rounded-2xl'>
          <Image src={post.featuredImage.url} alt={post.title} fill className='object-center absolute h-60 lg:h-80 w-full object-cover shadow-xl transition-transform duration-500 hover:scale-105'/>
        </div>
        <h1 className='text-gray-900 transition duration-700 text-center mb-6 cursor-pointer hover:text-pink-600 text-2xl lg:text-3xl font-bold px-2 lg:px-0'>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className='block lg:flex text-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <Image alt={post.author.name} height="30" width="30" className='align-middle rounded-full' src={post.author.photo.url}/>
            <p className='inline align-middle text-gray-800 ml-2 text-base lg:text-lg'>{post.author.name}</p>
          </div>
          <div className='font-medium text-gray-800 mt-0 lg:mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle text-base">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <p className='text-center text-base lg:text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8 leading-relaxed line-clamp-3'>{post.excerpt}</p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
              <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 hover:bg-pink-700 text-base lg:text-lg font-semibold rounded-full text-white px-6 lg:px-8 py-3 cursor-pointer shadow-lg hover:shadow-pink-500/50'>
                 Continue Reading
              </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCard