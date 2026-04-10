import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // enforce single tab indentation
      'indent': ['error', 'tab'],

      // enforce double quotes everywhere
      'quotes': ['error', 'double'],

      // enforce semicolons everywhere
      'semi': ['error', 'always'],

      // enforce consistent function argument spreading
      'function-call-argument-newline': ['error', 'consistent'],

      // enforce consistent array spreading
      'array-element-newline': ['error', 'consistent'],

      // enforce consistent object spreading
      'object-curly-newline': ['error', { 'consistent': true }],
    },
  },
]