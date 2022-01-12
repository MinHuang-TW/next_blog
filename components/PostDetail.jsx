import { Fragment } from 'react';
import moment from 'moment';
import Image from 'next/image';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) modifiedText = <b key={index}>{text}</b>;
      if (obj.italic) modifiedText = <em key={index}>{text}</em>;
      if (obj.underline) modifiedText = <u key={index}>{text}</u>;
      if (obj.type === 'link') {
        modifiedText = (
          <a
            key={index}
            className='text-teal-500 hover:text-teal-600 underline'
            href={obj.href}
            target={obj.openInNewTab ? '_blank' : '_self'}
          >
            {obj.children.map(({ text }) => text)}
          </a>
        );
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h4>
        );
      case 'block-quote':
        return (
          <h4 key={index} className='text-gray-500 mb-8'>
            {modifiedText.map((item, i) => (
              <em key={i}>{item}</em>
            ))}
          </h4>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            priority
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className='bg-white shadow-lg rounded-lg mb-8'>
      <div className='relative w-full h-[35vh]'>
        <Image
          className='rounded-t-lg'
          src={post.featuredImage.url}
          alt={post.title}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
        />
      </div>
      <div className='p-6'>
        <div className='flex items-center w-full'>
          <small className='text-gray-500 block mb-2'>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </small>
        </div>
        <h1 className='mb-8 text-2xl font-semibold'>{post.title}</h1>
        {post.content.raw.children.map((object, index) => {
          const children = object.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, object, object.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
