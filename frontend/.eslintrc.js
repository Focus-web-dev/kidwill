module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  plugins: ["prettier", "vue"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "prettier/prettier": 1,
    "no-console": 1,
    "no-debugger": 1,
    "no-useless-catch": 0,
    "no-empty": 0,
    "eol-last": [2, "always"],

    indent: ["error", 2],
    "vue/html-indent": ["error", 2],
    "vue/singleline-html-element-content-newline": 0,
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/attribute-hyphenation": 0,
    "vue/v-on-event-hyphenation": 0,
  },
};
