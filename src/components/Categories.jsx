import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '@/services';
const Categories = () => {
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    getCategories().then((newCategories)=>setCategories(newCategories));
  },[])
  return (
    <div className='p-6 lg:p-8 mb-8 bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl drop-shadow-lg rounded-3xl text-slate-800 transition-all duration-500 hover:bg-white/40'>
      <h3 className='text-xl mb-8 font-bold border-b border-black/10 pb-4 text-gray-900 drop-shadow-sm'>Categories</h3>
    {categories.map((category)=>(
      <Link key={category.slug} href={`/category/${category.slug}`}>
        <span className='cursor-pointer block pb-3 mb-3 border-b border-black/5 text-gray-800 font-semibold hover:text-pink-600 hover:translate-x-2 transition-all duration-300'>
          {category.name}
        </span>
      </Link>
    ))}
    </div>
  )
}

export default Categories