import Link from 'next/link';
import React from 'react';

function Footer(props) {
    return (
        
        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" class="hover:underline">My-blog</Link>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/home" class="mr-4 hover:underline md:mr-6">Home</Link>
                </li>
                <li>
                    <Link href="/about" class="mr-4 hover:underline md:mr-6">About</Link>
                </li>
                <li>
                    <Link href="/blog" class="mr-4 hover:underline md:mr-6">Blog</Link>
                </li>
                <li>
                    <Link href="/contact" class="hover:underline">Contact</Link>
                </li>
            </ul>
        </footer>

    );
}

export default Footer;