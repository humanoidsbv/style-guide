module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      ts: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars": "error",
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': "off",
    'react/prop-types': "off",
    'react/require-default-props': "off",
  },
};
