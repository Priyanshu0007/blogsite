import React,{useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '@/services';

const Header = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
    getCategories().then((newCategories)=>setCategories(newCategories));
    },[])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-black py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-gray-700'>
                        Travelling Indian
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-gray-700 ml-4 font-semibold cursor-pointer'>
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