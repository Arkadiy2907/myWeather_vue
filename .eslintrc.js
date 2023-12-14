module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
        },
      },
    ],
  },
};

// //  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
// module.exports = {
//   extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
//   plugins: ['prettier'],
//   rules: {
//     'vue/html-self-closing': [
//       'error',
//       {
//         html: {
//           void: 'never',
//         },
//       },
//     ],
//   },
//   overrides: [
//     {
//       files: ['*.vue'],
//       extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
//       rules: {
//         'vue/html-self-closing': 'off',
//       },
//     },
//   ],
// };
