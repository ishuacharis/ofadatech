/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/leadership',
        permanent: true,
      },
      {
        source: '/admission',
        destination: '/admission/requirements',
        permanent: true,
      },
      {
        source: '/academics',
        destination: '/academics/engineering',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
