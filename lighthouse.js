// module.exports = {
//     ci: {
//       collect: {
//         url: ['http://localhost:4200'],
//         staticDistDir: './dist/tailWindSample',
//       },
//       // 其他設定...
//     },
//   };

  module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };