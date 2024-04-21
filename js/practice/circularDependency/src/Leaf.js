import { AbstractNode } from "./internal.js";

export class Leaf extends AbstractNode {
  constructor(parent, value) {
    super(parent);
    this.value = value;
  }

  print() {
    return this.value;
  }
}
