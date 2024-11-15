import { genTags, patch } from "./dom.js";

const { div, span, code, button, img } = genTags;

function f() {}

function main() {
  const rootNode = document.getElementById("app"),
    render = (vdom) => patch(rootNode, vdom);

  const root = new Slides([
    t("Names in Space & Time"),
    grid("Scope", "Namespace", "Environment", "Bindings", "Symbol Table", "Call Stack", "Stack Frames", "Identifier", "Name", "Label", "Variable"),
    cc([sc("Empty Program", "Module")], ``),
    cc([sc("Empty Program", "Module")], `// ?\nparseInt("42", 10);`),
    cc(
      [sc("Static", "Prelude", { parseInt }).enter("Module")],
      `parseInt("42", 10);`,
    ),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module", {
          parseInt: Number.parseInt,
        }),
      ],
      `
const parseInt = Number.parseInt;

parseInt("42", 10);
`,
    ),
    cc(
      [
        sc("Static", "Prelude", { parseInt: Number.parseInt }).enter("Module", {
          parseInt: Number.parseInt,
        }),
        sc("Local", "f1"),
      ],
      `
const parseInt = Number.parseInt;

function f1() {
  return parseInt("42", 10);
}

f1();
`,
    ),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module"),
        sc("Local", "f1"),
      ],
      `
function f1() {
  return parseInt("42", 10);
}

f1();
`,
    ),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module"),
        sc("Dynamic", "f0", { parseInt: Number.parseInt }),
        sc("Local", "f1"),
      ],
      `
function f0() {
  const parseInt = Number.parseInt;
  return f1();
}

function f1() {
    return parseInt("42", 10);
}

f0();
`,
    ),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module"),
        sc("Local", "f1", { parseInt: Number.parseInt }).enter("<block>"),
      ],
      `
function f1() {
  const parseInt = Number.parseInt;

  {
    return parseInt("42", 10);
  }
}

f1();
`,
    ),
    t("🪝"),
    cc(
      [],
      `
defmodule Outer do
  def outer_function do
    IO.puts("Hello from Outer")
  end

  defmodule Inner do
    def inner_function do
      outer_function() # ⛔
    end
  end
end

Outer.Inner.inner_function() # ⛔

# Elixir.Outer.beam
# Elixir.Outer.Inner.beam
      `,
    ),
    cc(
      [
        sc("Import", "Stdlib", { process: {} }).enter("node_modules", {
          numbers: {},
        }),
        sc("Static", "Prelude", { parseInt }).enter("Module", {
          parseInt,
          cpuUsage() {},
        }),
        sc("Local", "f1"),
      ],
      `
import { parseInt } from "numbers";
import { cpuUsage } from "process";

function f1() {
  return parseInt("42", 10);
}
`,
    ),
    t("📦"),
    t("$PATH"),
    t("Class Path"),
    t("LD_PRELOAD"),
    t("Docker Layers"),
    t("🎈"),
    cc(
      [
        sc("Class", "Object").enter("C1"),
        sc("Prototype", "Object", { toString: f })
          .enter("C1")
          .enter("Instance"),
      ],
      `
class C1 {}
(new C1()).toString();
`,
    ),
    cc(
      [
        sc("Class", "Object", { toString: f })
          .enter("C1")
          .enter("C2", { toString: f }),
        sc("Prototype", "Object", { toString: f })
          .enter("C1")
          .enter("C2", { toString: f })
          .enter("Instance", { toString: f }),
      ],
      `
class C1 {}
class C2 extends C1{
  constructor() {
    super();
    this.toString = () => "instance!";
  }

  toString() {
    return "prototype!";
  }

  static toString() {
    return "class!";
  }
}

console.log(C2.toString());
console.log((new C2()).toString());
`,
    ),

    cc(
      [],
      `
class D1 {
  constructor() {
    this.d1 = "here";
  }

  d2() {
    return "I'm in the prototype";
  }
}

class D2 extends D1 {
  constructor() {
    super();
    this.d1 = "here override";
    this.d2 = "here too";
  }

  get() {
    return {d1: this.d1, d2: this.d2, parentD1: super.d1, parentD2: super.d2};
  }
}

console.log(new D2().get());

{
  d1: "here override",
  d2: "here too",
  parentD1: undefined,
  parentD2: [Function: d2]
}
      `,
    ),
    cc(
      [
        sc("Prototype", "Object")
          .enter("C", { getN: f, getLocalN: f })
          .enter("Instance", { n: 0 }),
        sc("Local", "getLocalN", { n: 43 }),
      ],
      `
public class C {
    private int n;

    C(int n) {
      this.n = n;
    }

    int getN() {
        return n;
    }

    int getLocalN() {
      int n = 43;
      return n;
    }
}
`,
    ),
    t("Capabilities"),
    t("Profiles / Platforms"),
    t("Dependency Injection"),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module"),
        sc("Local", "fixBase", { base: 10, hugeArray: [] }),
      ],
      `
function fixBase(base) {
  const hugeArray = new Array(1 << 20);
  return (s) => parseInt(s, base);
}

const myParseInt = fixBase(10);
myParseInt("42");
`,
    ),
    cc(
      [
        sc("myParseInt (static)", "Prelude", { parseInt })
          .enter("Module")
          .enter("fixBase", { base: 10 }),
        sc("Local", "myParseInt", { s: "42" }),
      ],
      `
function fixBase(base) {
  const hugeArray = new Array(1 << 20);
  return (s) => parseInt(s, base);
}

const myParseInt = fixBase(10);
myParseInt("42");
`,
    ),
    cc(
      [],
      `
;; https://www-old.cs.utah.edu/plt/scope-sets/background.html

(define lookup-method ...)

(define-syntax-rule (send obj-expr method-name arg)
  (let ([obj obj-expr])
    ((lookup-method obj 'method-name) obj arg)))

(send a-point rotate 90)

;; expands to

(let ([obj a-point])
  ((lookup-method obj 'rotate) obj 90))
`,
    ),
    cc(
      [],
      `
(define lookup-method ...)

(define-syntax-rule (send obj-expr method-name arg)
  (let ([obj obj-expr])
    ((lookup-method obj 'method-name) obj arg)))

(lambda (obj)
  (send a-point same? obj))

;; expands to

(let ([obj a-point])
  ((lookup-method obj 'same?) obj obj))
`,
    ),
    cc(
      [],
      `
(define lookup-method ...)

(define-syntax-rule (send obj-expr method-name arg)
  (let ([obj obj-expr])
    ((lookup-method obj 'method-name) obj arg)))

(let ([lookup-method #f])
  (send a-point rotate 90))

;; evals to

(let ([obj a-point])
  ((#f obj 'rotate) obj 90))
`,
    ),
    t("Dynamic Lookup"),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module"),
        sc("Dynamic", "f0", { parseInt: Number.parseInt }),
        sc("Local", "f1"),
      ],
      `
function f0() {
  const parseInt = Number.parseInt;
  return f1();
}

function f1() {
  return parseInt("42", 10);
}

f0();
`,
    ),
    t("Effects?"),
    cc(
      [
        sc("Static", "Prelude", { parseInt }).enter("Module", {
          log: f,
          dlog: f,
        }),
        sc("Dynamic", "f0", { parseInt: Number.parseInt }),
        sc("Effect", "f0", { log: f }),
        sc("Local", "f1"),
      ],
      `
import {log as dlog} from "superlog";

const log = console.log.bind(console);

function f0() {
  log!("in f0");
  with dlog as log;
  const parseInt = Number.parseInt;
  return f1();
}

function f1() {
  log!("in f0");
  return parseInt("42", 10);
}

f0();
`,
    ),
    t("React Context"),
    t("Prop Drilling"),
    t("Ctx"),
    t("Theme"),
    t("Session"),
    t("Settings"),
    t("Feature Flags"),
    t("Distributed Tracing"),
    t("💡"),
    t("UI"),
    limg("./ui.jpg", "Bluesky UI Example"),
    t("First Class Scope Chains"),
    t("Attach Custom Metadata"),
    t("JQuery on Scope Chains"),
    t("Minsky's Frames"),
    t("Ser / Estar"),
  ]);

  function handleClick(e) {
    const { action } = e.target?.dataset;

    if (action === undefined) {
      return;
    }

    switch (action) {
      case "slide:prev":
        root.goPrev();
        setSlideParam(root.currentSlide);
        break;
      case "slide:next":
        root.goNext();
        setSlideParam(root.currentSlide);
        break;
      default:
        console.warn("unknown action", action);
    }

    render(root.toDOM());
  }

  function handleKey(e) {
    switch (e.key) {
      case "ArrowLeft":
        root.goPrev();
        setSlideParam(root.currentSlide);
        break;
      case "ArrowRight":
        root.goNext();
        setSlideParam(root.currentSlide);
        break;
      default:
        return;
    }

    render(root.toDOM());
  }

  rootNode.addEventListener("click", handleClick);
  document.body.addEventListener("keyup", handleKey);

  const rawSlideNum =
      new URLSearchParams(window.location.search).get("slide") ?? "0",
    slideNum0 = parseInt(rawSlideNum, 10),
    slideNum = Number.isFinite(slideNum0) ? Math.max(0, slideNum0) : 0;

  root.goToSlide(slideNum);

  render(root.toDOM());
}

const cc = (...args) => new CodeChains(...args),
  sc = (...args) => new ScopeChain(...args);

function setSlideParam(v) {
  const url = new URL(window.location);
  url.searchParams.set("slide", v);
  window.history.pushState({}, "", url);
}

class Slides {
  constructor(slides = []) {
    this.slides = slides;
    this.currentSlide = 0;
  }

  goPrev() {
    return this.goToSlide(this.currentSlide - 1);
  }

  goNext() {
    return this.goToSlide(this.currentSlide + 1);
  }

  goToSlide(v) {
    if (v >= 0 && v < this.slides.length) {
      this.currentSlide = v;
      return true;
    } else {
      return false;
    }
  }

  toDOM() {
    return div(
      "slides",
      div("slide", this.slides[this.currentSlide].toDOM()),
      div(
        "slide-controls",
        button({ "data-action": "slide:prev" }, "⬅️"),
        button({ "data-action": "slide:next" }, "➡️"),
      ),
    );
  }
}

class LargeText {
  constructor(text) {
    this.text = text;
  }

  toDOM() {
    return div(
      {
        class: "large-text",
        style: `font-size: min(${150 / this.text.length}vw, 70vh)`,
      },
      this.text,
    );
  }
}

const t = (s) => new LargeText(s);

class LargeImage {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }

  toDOM() {
    return div("large-image", img({ src: this.src, alt: this.alt }));
  }
}

const limg = (src, alt) => new LargeImage(src, alt);

class Grid {
  constructor(items) {
    this.items = items;
  }

  toDOM() {
    return div({class: "large-grid", style: `--col-count: ${Math.max(1, Math.trunc(Math.sqrt(this.items.length)))}`}, ...this.items.map(v => span(null, v)));
  }
}

const grid = (...items) => new Grid(items);

class CodeChains {
  constructor(chains, code) {
    this.chains = new ScopeChains(chains);
    this.code = code.trim();
  }

  toDOM() {
    return div("code-chains", this.chains.toDOM(), code(null, this.code));
  }
}

class ScopeChains {
  constructor(chains = []) {
    this.chains = chains;
  }

  toDOM() {
    return div("scope-chains", ...this.chains.map((chain) => chain.toDOM()));
  }
}

class ScopeChain {
  constructor(name = "Chain", rootScopeName = "Scope", rootBindings = {}) {
    this.name = name;
    this.tail = Scope.root(rootScopeName, rootBindings);
  }

  toDOM() {
    return div(
      "scope-chain",
      div("chain-name", this.name),
      ...this.tail.chainToDOM(),
    );
  }

  bind(key, val) {
    this.tail.bind(key, val);
    return this;
  }

  enter(name, binds = {}) {
    this.tail = this.tail.enter(name, binds);
    return this;
  }
}

class Scope {
  constructor(up = null, name = "Scope", binds = {}) {
    this.up = up;
    this.name = name;
    this.binds = binds;
  }

  static root(name, binds) {
    return new Scope(null, name, binds);
  }

  bind(key, val) {
    this.binds[key] = val;
    return this;
  }

  enter(name, binds = {}) {
    return new Scope(this, name, binds);
  }

  leave() {
    return this.up;
  }

  toDOM() {
    const binds = [];
    let i = 0;
    for (const key in this.binds) {
      const val = this.binds[key];
      binds[i] = div(
        { class: "bind", "data-key": key },
        span("bind-key", key),
        rValue(val),
      );
      i += 1;
    }

    return div(
      "scope",
      div("scope-name", this.name),
      div("bindings", ...binds),
    );
  }

  chainToDOM() {
    const r = [];
    let scope = this;
    while (scope !== null) {
      if (r.length > 0) {
        r.push(div("chain-link", "⬆️"));
      }
      r.push(scope.toDOM());
      scope = scope.up;
    }

    r.reverse();
    return r;
  }
}

function rValue(v) {
  switch (typeof v) {
    case "string":
      return span("val val-str", v);
    case "number":
    case "bigint":
      return span("val val-num", v);

    case "boolean":
      return span("val val-bool", v);
    case "function":
      return span("val val-fn", "λ");
    case "symbol":
      return span("val val-bad", v.toString());
    default:
      return v == null
        ? span("val val-null", "null")
        : Array.isArray(v)
          ? span("val val-array", "[…]")
          : span("val val-obj", "{…}");
  }
}

main();
