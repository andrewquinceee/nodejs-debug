import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      // по заданию в коде есть debugger, поэтому разрешаем его
      "no-debugger": "off",
    },
  },
  // Prettier ставим последним, чтобы правила оформления не спорили с ним
  prettier,
];
