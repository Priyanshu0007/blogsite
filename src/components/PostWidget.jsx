import React,{useState,useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
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
    <div className=' shadow-lg rounded-lg p-8 mb-8 bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 '>
      <h3 className='text-xl mb-8 font-semibold border-b border-slate-400 pb-4 text-gray-600'>{slug? "Related Posts":"Recent Posts"}</h3>
      {relatedPosts.map((post)=>(
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img alt={post.title} src={post.featuredImage.url} height='60px' width='60px' className='align-middle rounded-full'/>
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