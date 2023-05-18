  module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    settings: {
        emulatedFormFactor: 'desktop', // 或 'mobile'
        throttlingMethod: 'provided', // 或 'provided'
      },
  },
};