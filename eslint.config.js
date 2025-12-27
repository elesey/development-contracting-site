import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";

export default [
  // Astro recommended config
  ...eslintPluginAstro.configs.recommended,

  // Parse TypeScript files without type-aware rules.
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
  },

  // JSX a11y recommended config for accessibility
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // Global ignores
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
];
