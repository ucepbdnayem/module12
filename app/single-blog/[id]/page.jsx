import React from 'react';
import getPostDetails from '@/lib/getPostDetails';
import Image from 'next/image';

const Singleblog = async ({params}) => {
    const post = await getPostDetails(params.id);
    console.log(post.postDetails);
    return (
        <section>
            <h1 className="font-bold text-lg pb-5">Post Details</h1>
            <div className="w-full mb-5">
                {post.postDetails ? 
                    (
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg shadow-cyan-600">
                        <Image className="rounded-t-lg" 
                            src={post.postDetails.img}
                            width={100}
                            height={100}
                            layout="responsive"
                            alt={post.postDetails.title}
                            objectFit="cover"
                            loading='lazy'
                            quality={80}
                        />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.postDetails.title}</h5>
                            <p className="mb-3 font-normal text-gray-900 text-justify">
                                {post.postDetails.content}
                            </p>
                        </div>
                    </div>
                    ):(
                        <p>data not found...</p>
                    )
                  }      
            </div>
        </section>
    )
}

export default Singleblog
