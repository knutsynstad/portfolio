import nextConfig from "eslint-config-next/core-web-vitals";
import tailwindCanonicalClasses from "eslint-plugin-tailwind-canonical-classes";

const eslintConfig = [
  ...nextConfig,
  {
    plugins: {
      "tailwind-canonical-classes": tailwindCanonicalClasses,
    },
    rules: {
      "tailwind-canonical-classes/tailwind-canonical-classes": [
        "warn",
        { cssPath: "./app/globals.css" },
      ],
    },
  },
];

export default eslintConfig;
