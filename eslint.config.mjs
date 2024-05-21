// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: {
      quotes: "double",
      semi: true,
    },
  },
  dirs: {
    src: ["./playground"],
  },
})
  .append
  // your custom flat config here...
  ();