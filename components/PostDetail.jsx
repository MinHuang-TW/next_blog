import React from 'react';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) modifiedText = <b key={index}>{text}</b>;
      if (obj.italic) modifiedText = <em key={index}>{text}</em>;
      if (obj.underline) modifiedText = <u key={index}>{text}</u>;
      if (obj.type === 'link')
        modifiedText = (
          <a href={obj.href} target={obj.openInNewTab ? '_blank' : '_self'}>
            {obj.children.map((t) => {
              if (t.italic)
                return (
                  // TODO:
                  <em key={index} className='underline'>
                    {t.text}
                  </em>
                );
            })}
          </a>
        );
    }

    switch (type) {
      // TODO:
      case 'block-quote':
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-lg pb-12 mb-8'>
      <div className='relative overflow-hidden mb-6'>
        <img
          className='object-top h-full w-full rounded-t-lg'
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
      <div className='px-4'>
        <div className='flex items-center mb-8 w-full'></div>
        {/* TODO: autor */}
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
