import React from 'react'
import { getPostDetails, getPosts } from '@/services'
import { Author,CommentsForm,PostDetail,Comments, PostWidget, Categories } from '@/components'
import Head from 'next/head'


const PostDetails = ({post}) => {
  return (
    <div className='containre mx-auto px-10 mb-8'>
        <Head>
            <title>{post.title}</title>
            <link rel='icon' href='/favicon.ico'></link>
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post}/>
                
                <CommentsForm slug={post.slug}/>
                <Comments slug={post.slug}/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget slug={post.slug} categories={post.categories.map((category)=>category.slug)}/>
                    <Categories/>
                    <Author author={post.author}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const data=await getPostDetails(params.slug)
    return {props:{post:data}}
}
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }