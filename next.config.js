/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: {
      ssr: true, // SSR을 위한 설정
      displayName: true, // 클래스명에 컴포넌트 이름을 붙임
      pure: true, // dead code elimination (사용되지 않는 속성 제거)
    },
  },
  env: {
    MODE: process.env.MODE,
    OG_IMAGE: '/og-image.jpg',
    BIO: '숲 좋아하는 개발자',
  },
};

module.exports = nextConfig;
