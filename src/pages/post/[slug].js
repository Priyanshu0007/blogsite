import React from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import { AdjacentPosts } from '@/sections';

import Head from 'next/head';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 lg:px-10 mb-8 text-center py-20 bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl mt-8">
        <h1 className="text-3xl font-bold text-gray-800">Post Not Found</h1>
        <p className="text-gray-600 mt-4">The article you are looking for does not exist or could not be loaded.</p>
      </div>
    );
  }

  return (
      <div className="container mx-auto px-4 lg:px-10 mb-8">
        <Head>
          <title>{`${post.title} | Travelling Indian`}</title>
          <meta name="description" content={post.excerpt || `Read ${post.title} on Travelling Indian`} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt || `Read ${post.title} on Travelling Indian`} />
          <meta property="og:image" content={post.featuredImage?.url} />
          <link rel='icon' href='/favicon.ico'></link>
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
              <Author author={post.author} />
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default PostDetails;

// Fetch data at request time
export async function getServerSideProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}