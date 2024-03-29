# oxenode-asm

This is a plugin for [Oxenode](https://oxenode.io/app), a general purpose visual scripting language. The plugin allows you to add visual nodes that can be used as bindings.

## Getting Started

To get started, follow these steps:

1. Clone this repository.
2. Install the required dependencies by running `npm install`.
3. Use the hot-reload build feature for development by running `npm run dev`.
4. Build the plugin for production by running `npm run build`.

## Hosted Build

The build for the plugin is meant to be hosted statically. It is recommended to publish the plugin on GitHub and use CDNs like [jsDelivr](https://www.jsdelivr.com/) for distribution.

To use the plugin through jsDelivr, you can publish your compiled plugin (`./dist`) in your GitHub repository and access it using the following URL:

```
https://cdn.jsdelivr.net/gh/[user]/[repo]
```

## Adding the Plugin to Oxenode

To add the plugin to Oxenode, follow these steps:

1. Open Oxenode and go to the Plugins Tab.
2. Click on the Add button (`+`).
3. Paste the URL of your plugin