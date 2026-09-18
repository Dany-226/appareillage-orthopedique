/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/pathologie/avc-hemiplegie",
        destination: "/pathologie/avc",
        permanent: true,
      },
      {
        source: "/pathologie/sep-sla",
        destination: "/pathologie/sep",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
