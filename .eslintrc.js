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

//  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
