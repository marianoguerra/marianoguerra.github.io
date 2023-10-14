const byId = (id) => document.getElementById(id);

function main() {
  const input = byId("input"),
    output = byId("output"),
    code = byId("code");

  function update() {
    updateOutput(input.value, output, code);
  }

  input.addEventListener("input", update);
  update();
}

function updateOutput(s, output, codeNode) {
  const code = format(s);

  output.innerHTML = code;
  codeNode.textContent = code;
}

const rootClass = "my-summary-list",
  prefix = `
<div class="my-summary-list">
   <style type="text/css">
    .my-summary-list details{margin-bottom:1em;}
    .my-summary-list p{margin-bottom:1em;margin-left:1em;}
    .my-summary-list summary, .my-summary-list p{
      font-family:futura-lt-w01-light,futura-lt-w05-light,sans-serif;
      color:rgb(114,130,127);
    }
   </style>
`,
  suffix = `\n</div>`;

function isTitle(s) {
  return s[0] !== " " && s[0] !== "\t";
}

function format(s) {
  const groups = [],
    lines = s.trim().split("\n").filter((v) => !!v.trim());

  let curGroup = null;

  for (const line of lines) {
    if (isTitle(line)) {
      if (curGroup !== null) {
        groups.push(curGroup);
      }

      curGroup = { title: line, items: [] };
    } else {
      if (curGroup === null) {
        curGroup = { title: "No Title", items: [] };
      }

      curGroup.items.push(line.trim());
    }
  }

  if (curGroup.items.length > 0) {
    groups.push(curGroup);
  }

  return prefix + groups.map((g) => formatEntry(g.title, g.items)).join("\n") +
    suffix;
}

function formatEntry(title, items) {
  const paras = items.map((v) => `  <p>${v}</p>`).join("\n");
  return `<details>
  <summary>${title}</summary>
${paras}
</details>`;
}

main();
