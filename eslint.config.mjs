import js from "@eslint/js";
import globals from "globals";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: "error",
      "no-debugger": "off",
    },
  },
  prettierRecommended,
];
