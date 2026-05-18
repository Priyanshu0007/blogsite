import React from 'react';

import moment from 'moment';
import Image from 'next/image';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title || 'Post Image'}
            height={obj.height || 400}
            width={obj.width || 800}
            src={obj.src}
            style={{ width: '100%', height: 'auto' }}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="p-4 lg:p-8 pb-12 mb-8 bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl drop-shadow-lg rounded-3xl text-slate-800 transition-all duration-500 hover:bg-white/40">
        <div className="relative overflow-hidden shadow-lg mb-6 h-60 lg:h-96 w-full rounded-t-2xl lg:rounded-2xl">
          <Image src={post.featuredImage.url} alt={post.title || "Featured Image"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-top object-cover shadow-xl transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="px-2 lg:px-0">
          <div className="flex flex-wrap items-center mb-8 w-full gap-4 lg:gap-0">
            <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
              <Image
                alt={post.author.name}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-800 ml-2 font-semibold text-base lg:text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-base">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl lg:text-4xl font-bold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;