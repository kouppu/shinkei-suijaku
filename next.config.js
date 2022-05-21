/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/shinkei-suijaku" : "",
  trailingSlash: true,
}

module.exports = nextConfig
