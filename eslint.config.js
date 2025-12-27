import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Astro recommended config
  ...eslintPluginAstro.configs.recommended,

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
