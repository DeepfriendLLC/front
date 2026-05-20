import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/jsx-key": "warn",
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-children-prop": "off",

      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "typescript-eslint/no-non-null-assertion": "error"
    }
  }
];

export default eslintConfig;