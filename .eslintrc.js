module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
      },
    ],
    'react/sort-prop-types': [
      1,
      {
        callbacksLast: true,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'no-duplicate-imports': 'error',
    'react/jsx-no-bind': 1,
    'prettier/prettier': [
      1,
      { singleQuote: true, semi: false, trailingComma: 'all' },
    ],
    'prefer-const': 2,
  },
}
