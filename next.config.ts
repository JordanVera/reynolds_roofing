import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/icons/favicon.ico',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/areas-served/belbrook',
        destination: '/areas-served/benbrook',
        permanent: true,
      },
      {
        source: '/areas-served/sugarland',
        destination: '/areas-served/sugar-land',
        permanent: true,
      },
      {
        source: '/about_us.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
