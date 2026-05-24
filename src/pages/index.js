import Head from 'next/head'
import dynamic from 'next/dynamic'
import { PostCard,Categories,PostWidget } from '@/components'
import { getPosts } from '../services'

const FeaturedPosts = dynamic(() => import('@/sections/FeaturedPost'), {
  ssr: false,
  loading: () => <div className="text-center w-full py-8">Loading featured posts...</div>,
});

export default function Home({posts}) {
  return (
    <div className='container mx-auto px-4 lg:px-10 mb-8'>
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
          {posts && posts.length > 0 ? (
            posts.reverse().map((post,index)=>(<PostCard post={post.node} key={index} />))
          ) : (
            <div className="text-center py-20 bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl rounded-3xl">
              <h2 className="text-2xl font-bold text-gray-800">No Posts Found</h2>
              <p className="text-gray-600 mt-2">There are no articles published yet.</p>
            </div>
          )}
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