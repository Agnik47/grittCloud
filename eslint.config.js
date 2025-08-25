import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { document: 'readonly', window: 'readonly' }
    },
    plugins: { react: reactPlugin },
    rules: {
      'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/jsx-uses-vars': 'error'
    },
    settings: { react: { version: '18.0' } }
  },
  {
    rules: { 'no-unused-vars': 'off' }
  }
];
