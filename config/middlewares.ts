export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: { contentSecurityPolicy: false },
  },
  {
    name: 'strapi::session',
    config: { secure: false },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://your-site.netlify.app'],
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
