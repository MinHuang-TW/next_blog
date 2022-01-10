import Head from 'next/head';
import { getPosts } from '../services';
import { Categories, PostCard, PostWidget } from '../components';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10'>
      <Head>
        <title>Quantum Fern</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid gap-8 grid-cols-1 lg:grid-cols-12'>
        <section className='lg:col-span-8 col-span-1'>
          {posts.map(({ node: post }) => (
            <PostCard key={post.title} post={post} />
          ))}
        </section>
        <section className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </section>
      </main>
      <footer className='p-[3.75rem] text-center'>
        <small className='text-white'>{`Chunwei Hse © ${new Date().getFullYear()}`}</small>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};
