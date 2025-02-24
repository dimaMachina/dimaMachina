import path from 'node:path'
import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
// @ts-expect-error -- no types
import eslintPluginNext from '@next/eslint-plugin-next'
// @ts-expect-error -- no types
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import-x'
import eslintPluginReact from 'eslint-plugin-react'
// @ts-expect-error -- no types
import * as eslintPluginReactCompiler from 'eslint-plugin-react-compiler'
// @ts-expect-error -- no types
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginSonarJs from 'eslint-plugin-sonarjs'
// @ts-expect-error -- no types
import eslintPluginTsSortKeys from 'eslint-plugin-typescript-sort-keys'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'
import type { Config } from 'typescript-eslint'

const REACT_COMPILER_RESTRICT = {
  name: 'react',
  importNames: ['memo', 'useCallback', 'useMemo']
}

const config: Config = tseslint.config(
  includeIgnoreFile(path.resolve('.gitignore')),
  { ignores: ['**/generated-page-map.ts', '**/next-env.d.ts'] },
  // Rules for all files
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintPluginUnicorn.configs.recommended,
      eslintPluginSonarJs.configs.recommended,
      eslintConfigPrettier
    ],
    plugins: {
      import: eslintPluginImport
    },
    rules: {
      'no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
      'prefer-object-has-own': 'error',
      'logical-assignment-operators': [
        'error',
        'always',
        { enforceForIfStatements: true }
      ],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-lonely-if': 'error',
      'prefer-destructuring': [
        'error',
        { VariableDeclarator: { object: true } }
      ],
      'import/no-duplicates': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'object-shorthand': ['error', 'always'],
      '@typescript-eslint/prefer-for-of': 'error',
      quotes: ['error', 'single', { avoidEscape: true }], // Matches Prettier, but also replaces backticks
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_' // allow underscores in destructuring
        }
      ],
      'prefer-object-spread': 'error',
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'prefer-const': ['error', { destructuring: 'all' }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'unicorn/switch-case-braces': ['error', 'avoid'],

      'sonarjs/unused-named-groups': 'off', // todo
      'sonarjs/cognitive-complexity': 'off', // todo
      'sonarjs/prefer-nullish-coalescing': 'off', // todo
      'sonarjs/no-nested-conditional': 'off', // todo
      'sonarjs/slow-regex': 'off', // todo
      'sonarjs/different-types-comparison': 'off', // todo
      'sonarjs/default-param-last': 'off', // todo
      'sonarjs/no-misleading-array-reverse': 'off', // todo
      'sonarjs/sonar-prefer-regexp-exec': 'off', // todo
      'sonarjs/no-nested-functions': 'off', // todo
      'sonarjs/todo-tag': 'off', // todo
      'sonarjs/no-unknown-property': 'off', // todo
      'sonarjs/hook-use-state': 'off', // todo
      'sonarjs/no-nested-template-literals': 'off', // todo
      'sonarjs/label-has-associated-control': 'off', // todo
      'sonarjs/no-nested-assignment': 'off', // todo
      'sonarjs/function-return-type': 'off', // todo
      'sonarjs/table-header': 'off', // todo
      'sonarjs/anchor-is-valid': 'off', // todo
      'sonarjs/sonar-no-unused-vars': 'off', // todo
      'sonarjs/no-var': 'off', // todo
      'sonarjs/argument-type': 'off', // todo
      'sonarjs/no-array-index-key': 'off', // todo
      'sonarjs/no-unstable-nested-components': 'off', // todo

      'sonarjs/no-unused-vars': 'off',
      'sonarjs/prefer-regexp-exec': 'off',
      'sonarjs/fixme-tag': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // Too many cases
      'unicorn/prevent-abbreviations': 'off', // Too many cases
      'unicorn/explicit-length-check': 'off', // I don't like
      'unicorn/no-null': 'off', // I don't like
      'unicorn/prefer-global-this': 'off', // Bundlers are smarter with `typeof window === 'undefined'` checks
      'unicorn/prefer-optional-catch-binding': 'off' // catch by @typescript-eslint/no-unused-vars
    }
  },
  // Rules for React files
  {
    files: ['{packages,examples,docs}/**'],
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      '@next/next': eslintPluginNext
    },
    extends: [
      // @ts-expect-error -- always exist
      eslintPluginReact.configs.flat.recommended,
      // @ts-expect-error -- always exist
      eslintPluginReact.configs.flat['jsx-runtime']
    ],
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
      'react-hooks/exhaustive-deps': 'error',
      'react/self-closing-comp': 'error',
      'no-restricted-syntax': [
        'error',
        {
          // ❌ z.object(…)
          selector: 'MemberExpression[object.name=z] > .property[name=object]',
          message: 'Use z.strictObject is more safe.'
        }
      ],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'], allow: 'as-needed' }
      ],
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-boolean-value': 'error'
    },
    settings: {
      react: { version: 'detect' }
    }
  },
  // Rules for TypeScript files
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    plugins: {
      'typescript-sort-keys': eslintPluginTsSortKeys
    },
    // TODO: fix errors
    // extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-destructuring': [
        'error',
        { VariableDeclarator: { object: true } }
      ],
      '@typescript-eslint/no-unnecessary-condition': 'error'
    }
  },
  {
    files: ['packages/**'],
    plugins: {
      'react-compiler': eslintPluginReactCompiler
    },
    rules: {
      'no-restricted-imports': ['error', REACT_COMPILER_RESTRICT],
      'react-compiler/react-compiler': 'error'
    }
  }
)

export default config
