import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '@/services';
const Categories = () => {
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    getCategories().then((newCategories)=>setCategories(newCategories));
  },[])
  return (
    <div className=' p-8 mb-8 bg-white/20 backdrop-blur-md border border-white/30 shadow-xl drop-shadow-md rounded-2xl text-slate-800 transition-all duration-300 hover:bg-white/30  '>
      <h3 className='text-xl mb-8 font-semibold border-b border-slate-400 pb-4 text-gray-800'>Categories</h3>
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