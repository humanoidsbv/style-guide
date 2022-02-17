module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      ts: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "react"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "never", { svg: "always" }],
    "import/no-default-export": "error",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
  },
};
