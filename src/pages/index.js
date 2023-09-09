import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { PostCard,Categories,PostWidget } from '@/components'
const posts=[
  {title:'Aur sunao',excerpt:'Baat bahi kya chal raaha hai'},
  {title:'Hey',excerpt:'Hey whatsapp, everything fine'},
]

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Babloo Kay Blog</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post,index)=>(<PostCard post={post} key={index} />))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
