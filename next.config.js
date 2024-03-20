/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/leadership',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
