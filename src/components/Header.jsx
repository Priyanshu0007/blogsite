import React,{useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '@/services';

const Header = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
    getCategories().then((newCategories)=>setCategories(newCategories));
    },[])
  return (
    <div className='container mx-auto px-4 lg:px-10 mb-8'>
        <div className='border-b w-full border-black/20 py-4 lg:py-8 flex justify-between items-center flex-wrap gap-4'>
            <div className='block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-3xl md:text-4xl text-gray-800 drop-shadow-md'>
                        Travelling Indian
                    </span>
                </Link>
            </div>
            <div className='flex items-center flex-wrap gap-3 lg:gap-4'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='align-middle text-gray-800 font-semibold cursor-pointer transition-all duration-300 hover:text-pink-600 hover:-translate-y-1 inline-block'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header