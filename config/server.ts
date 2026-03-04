export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://artistry-soul-0-server.onrender.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
