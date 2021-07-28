Include module at your application

```javascript
import OEmbed from "musex-oembed";
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  ...

  tools: {
    ...
    oembed: {
      class: OEmbed,
      config: {
        proxy: 'https://musex-cors.herokuapp.com/', // Your backend endpoint for url data fetching
      }
    }
  },

  ...
});
```