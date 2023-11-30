import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    bundlerChain: (chain, { bundler, CHAIN_ID }) => {
      chain.module
        .rule(CHAIN_ID.RULE.JS)
        .use(CHAIN_ID.USE.SWC)
        .tap((options) => {
          options.rspackExperiments = {
            import: [
              {
                libraryName: "@nutui/nutui-react",
                customName: "@nutui/nutui-react/dist/esm/{{ member }}",
                style: "{{ member }}/style/style.css",
              },
            ],
          };
          return options;
        });
    },
    rspack: (config, { appendPlugins, rspack }) => {
      appendPlugins(new rspack.ProgressPlugin({ prefix: "🐹 Rspack" }));
      return config;
    },
  },
});
