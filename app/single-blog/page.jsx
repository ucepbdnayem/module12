import React from 'react';
import getAllPosts from '@/lib/getSignleBlog';
import Link from 'next/link';
import Image from 'next/image';

const Singleblog = async() => {
    const blogId = 2;
    const singleblog = await getAllPosts(blogId);
    return (
        <section>
            <h1 className="font-bold text-lg pb-5">Blog Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {singleblog.map((post) => {
                return (                 
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href={`/single-blog/${post.id}`}>
                            <Image className="rounded-t-lg" 
                                src={post.img}
                                width={500}
                                height={500}
                                alt={post.title}
                                objectFit="cover"
                                loading='lazy'
                                quality={80}
                            />
                        </Link>
                        <div className="p-5">
                            <Link href={`/single-blog/${post.id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {post.short}
                            </p>
                            <Link href={`/single-blog/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                )
            })}
            </div>
        </section>
    )
}

export default Singleblog
