import React,{useState,useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts , getSimilarPosts } from '@/services';
const PostWidget = ({categories,slug}) => {
  const [relatedPosts,setRelatedPosts]=useState([]);
  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories,slug).then((result)=>setRelatedPosts(result))
    }else{
      getRecentPosts().then((result)=>setRelatedPosts(result))
    }
  },[])
  return (
    <div className='p-6 lg:p-8 mb-8 bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl drop-shadow-lg rounded-3xl text-slate-800 transition-all duration-500 hover:bg-white/40'>
      <h3 className='text-xl mb-8 font-bold border-b border-black/10 pb-4 text-gray-900 drop-shadow-sm'>{slug? "Related Posts":"Recent Posts"}</h3>
      {relatedPosts.map((post)=>(
        <div key={post.title} className='flex items-center w-full mb-6 group cursor-pointer'>
          <div className='w-16 flex-none'>
            <Image alt={post.title} src={post.featuredImage.url} height="60" width="60" className='align-middle rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300'/>
          </div>
          <div className='flex-grow ml-4 border-b border-black/5 pb-2'>
            <p className='text-gray-600 text-xs lg:text-sm font-medium'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-sm lg:text-md font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget