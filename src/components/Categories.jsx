import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '@/services';
const Categories = () => {
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    getCategories().then((newCategories)=>setCategories(newCategories));
  },[])
  return (
    <div className=' shadow-lg rounded-lg p-8 mb-8 bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 '>
      <h3 className='text-xl mb-8 font-semibold border-b border-slate-400 pb-4 text-gray-600'>Categories</h3>
    {categories.map((category)=>(
      <Link key={category.slug} href={`/category/${category.slug}`}>
        <span className='cursor-pointer block pb-3 mb-3'>
          {category.name}
        </span>
      </Link>
    ))}
    </div>
  )
}

export default Categories