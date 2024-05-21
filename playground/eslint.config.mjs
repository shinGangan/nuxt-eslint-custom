// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  ignores: ["**/github", "**/.vscode"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
  },
});
