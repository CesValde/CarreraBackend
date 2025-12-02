import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [
      js.configs.recommended,
      prettierConfig // Desactiva reglas de ESLint que chocan con Prettier
    ],
    languageOptions: {
      globals: globals.browser
    }
  }
]);
