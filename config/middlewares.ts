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
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
