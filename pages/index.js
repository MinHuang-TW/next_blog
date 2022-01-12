import Head from 'next/head';
import { getPosts } from '../services';
import { Categories, PostCard, PostWidget } from '../components';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Quantum Fern | Chunwei Hsu</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Chunwei's blog including quantum physics, technology, thoughts about education and research, and some other personal observations about the modern society."
        />
      </Head>
      <main className='grid gap-8 grid-cols-1 lg:grid-cols-12'>
        <section className='lg:col-span-8 col-span-1 grid gap-8'>
          {posts.map(({ node: post }) => (
            <PostCard key={post.title} post={post} />
          ))}
        </section>
        <section className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky lg:top-8 top-0 relative'>
            <PostWidget />
            <Categories posts={posts} />
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};
