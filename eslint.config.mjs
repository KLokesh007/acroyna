import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat to enable ESLint config compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"], // Change to "warn" instead of "error"
      "@next/next/no-img-element": "off", // Allow <img> usage
      "react/no-unescaped-entities": "off", // Disable escaping of quotes
      // Add specific rules to address TypeScript errors
      "@typescript-eslint/no-explicit-any": "error", // Encourage specifying types instead of 'any'
      "@typescript-eslint/no-unsafe-function-type": "error", // Avoid 'Function' type
      "@typescript-eslint/no-empty-object-type": "error", // Avoid empty object type "{}"
      // Disable the Next.js rule for <a> tag usage
      "@next/next/no-html-link-for-pages": "off", // Allow <a> for internal navigation
    },
  },
];

export default eslintConfig;
