// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: false,
    // stylistic: {
    //   quotes: "double",
    //   semi: true,
    // },
  },
  dirs: {
    src: ["./src"],
  },
}).append({
  ignores: ["**/.github", ".vscode/**"],
});
