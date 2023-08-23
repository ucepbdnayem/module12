import React from 'react';
import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

const Blog = async () => {
  const posts = await getAllPosts();
  return (
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
  )
}

export default Blog
