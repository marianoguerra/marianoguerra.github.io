import { h, text } from "./minivdom.js";
export { patch, text } from "./minivdom.js";

function fixNode(node) {
  switch (typeof node) {
    case "string":
      return text(node);
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
      return text(node.toString());
    case "function":
    default:
      return node == null ? text("") : node;
  }
}

function fixNodes(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    nodes[i] = fixNode(node);
  }

  return nodes;
}

const tagCache = {};
export const genTags = new Proxy(
  {},
  {
    get(_, prop) {
      const cached = tagCache[prop];

      if (cached) {
        return cached;
      } else {
        const tag = (attrs, ...childs) =>
          h(
            prop,
            typeof attrs === "string" ? { class: attrs } : attrs ?? {},
            fixNodes(childs),
          );
        tagCache[prop] = tag;
        return tag;
      }
    },
  },
);
