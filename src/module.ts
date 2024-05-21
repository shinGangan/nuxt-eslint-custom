import {
  createResolver,
  defineNuxtModule,
  installModule,
  useNuxt,
} from "@nuxt/kit";
import { name, resolutions, version } from "../package.json";
import type { ModuleOptions } from "./types";

const defaults = (nuxt = useNuxt()): ModuleOptions => ({});

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "eslint-ctm",
    compatibility: {
      nuxt: resolutions.nuxt,
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
