import tsParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import tsEslint from "@typescript-eslint/eslint-plugin";
export default [
  {
    languageOptions: {
      parser: tsParser,
    },
    files: ["**/*.{js,ts,jsx,tsx,astro}"],
    plugins: {
      tsEslint: tsEslint,
    },
    rules: {
      "no-unused-vars": "error",
    },
  },
  ...eslintPluginAstro.configs.all,
];
