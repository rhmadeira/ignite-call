import { globalCss } from "@ignite-ui/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  "html, body": {
    height: "100%",
    width: "100%",
  },
});
