const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    mode: "production",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
});
