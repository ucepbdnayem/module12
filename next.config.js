/** @type {import('next').NextConfig} */
const nextConfig = {
    //distDir: 'build',
    api: {
        externalResolver: true,
    },
    images: {
        //domains: ['https://roar.media'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'roar.media',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)?', // Matches all pages
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
