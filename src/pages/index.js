import Head from 'next/head'
import dynamic from 'next/dynamic'
import { PostCard,Categories,PostWidget } from '@/components'
import { getPosts } from '../services'

const FeaturedPosts = dynamic(() => import('@/sections/FeaturedPost'), {
  loading: () => <div className="text-center w-full py-8">Loading featured posts...</div>,
});

export default function Home({posts}) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Travelling Indian</title>
        <meta name="description" content="A modern blog about travelling in India, showcasing culture, places, and experiences." />
        <meta property="og:title" content="Travelling Indian Blog" />
        <meta property="og:description" content="Discover the best travel experiences, guides, and stories from India." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travelling Indian Blog" />
        <meta name="twitter:description" content="Discover the best travel experiences, guides, and stories from India." />
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.reverse().map((post,index)=>(<PostCard post={post.node} key={index} />))}
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

export async function getServerSideProps(){
  const posts=(await getPosts())|| [];
  return {props:{posts}}
}