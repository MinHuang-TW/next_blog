const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' https://api-eu-central-1.graphcms.com/ https://media.graphcms.com/ https://vitals.vercel-insights.com/; font-src: https://fonts.googleapis.com/",
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
