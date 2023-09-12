import { AbstractNode } from "./internal.js";

export class Node extends AbstractNode {
  constructor(parent, thing) {
    super(parent);
    this.children = {};
    Object.keys(thing).forEach((key) => {
      this.children[key] = AbstractNode.from(thing[key], this);
    });
  }

  print() {
    return (
      "\n" +
      Object.keys(this.children)
        .map((key) => `${"".padStart(this.getDepth() * 2)}${key}: ${this.children[key].print()}`)
        .join("\n")
    );
  }
}
