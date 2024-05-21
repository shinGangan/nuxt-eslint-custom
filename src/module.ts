import {
  createResolver,
  defineNuxtModule,
  installModule,
  useNuxt,
} from "@nuxt/kit";
import type { ModuleOptions } from "./types";

const defaults = (nuxt = useNuxt()): ModuleOptions => ({});

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@shinGangan/nuxt-eslint-custom",
    version: "v0.0.1",
    configKey: "eslint-ctm",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults,
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    // TODO: add eslint.config template
    const configTemplate = genEslintConfig();

    // install module
    await installModule("@nuxt/eslint", {
      config: {
        stylistic: {
          quotes: "double",
          semi: true,
        },
      },
      checker: false,
    });
  },
});

/**
 * Generate eslint config template
 *
 * @param filename
 */
const genEslintConfig = (filename = "./playgournd/eslint.config.mjs") => {};
