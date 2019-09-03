module.exports =  {
  parser:  '@typescript-eslint/parser',
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react-hooks',
  ],
  rules:  {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 0,
    semi: ['error', 'never'],
    'prettier/prettier': 'off',
    'react/jsx-max-props-per-line': 1,
    'react/jsx-first-prop-new-line': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'max-len': ['error', {
      code: 80,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignorePattern: '^\\s*import\\s.+\\s*from\\s*',
      ignoreComments: true
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: 'never',
      ExportDeclaration: { consistent: true },
    }],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single']
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
