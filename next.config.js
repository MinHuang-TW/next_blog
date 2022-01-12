const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' https://api-eu-central-1.graphcms.com/; font-src: https://fonts.googleapis.com/, img-src https://media.graphcms.com/; child-src 'none';",
  },
];

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ['media.graphcms.com'],
  },
};
