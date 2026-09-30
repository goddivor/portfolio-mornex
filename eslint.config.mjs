import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Données brutes de Mornex et journal : hors du code du site.
    "Me Nex/**",
    "Les projets que j'ai fait/**",
    "Les projets en cours de developpement/**",
    "Mes information personnel/**",
    "Design PORTFOLIO/**",
    "JOURNAL DE TAF/**",
  ]),
]);

export default eslintConfig;
