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
    <div className=' shadow-lg rounded-lg p-8 mb-8 bg-gray-300/40  bg-clip-padding  backdrop-blur-sm  '>
      <h3 className='text-xl mb-8 font-semibold border-b border-slate-400 pb-4 text-gray-600'>{slug? "Related Posts":"Recent Posts"}</h3>
      {relatedPosts.map((post)=>(
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image alt={post.title} src={post.featuredImage.url} height="60" width="60" className='align-middle rounded-full'/>
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget