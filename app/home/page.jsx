import React from 'react'
import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

const Home = async() => {
  const posts = await getAllPosts();
  return (
    <div>
      <section>
        <h1 className='font-bold text-lg pb-3'>Welcome to My Blog</h1>
      </section>
      <section>
        <p className='text-justify pb-2'>
          A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos.
        </p>
        <p className='text-justify pb-5'>
          Blogging has gained immense popularity due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.
        </p>
      </section>
      <section>
        <h1 className="font-bold text-lg pb-5">Blog Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => {
            return ( 
              <Link href={`/blog/${post.id}`}>
              <div className='h-auto max-w-full rounded-lg text-white bg-teal-700 text-center py-5 hover:bg-gray-700'>
                <p className="inline-block align-middle" key={post.id}>
                  {post.name}
                </p>
              </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
