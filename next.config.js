const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; img-src https://*; child-src 'none';",
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
