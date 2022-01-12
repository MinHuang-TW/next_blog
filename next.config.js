const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' https://api-eu-central-1.graphcms.com/ https://media.graphcms.com/ https://vitals.vercel-insights.com/ https://fonts.googleapis.com/; img-src 'self' data:image/svg+xml,image/gif",
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
