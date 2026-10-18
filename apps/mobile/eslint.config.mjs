import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    // Add mobile/React Native specific rules or ignores here if needed
  },
];
