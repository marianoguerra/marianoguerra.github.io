const byId = (id) => document.getElementById(id);

function main() {
  const input = byId("input"),
    output = byId("output"),
    code = byId("code"),
    withLine = byId("with-line");

  function update() {
    updateOutput(input.value, output, code, withLine.checked);
  }

  input.addEventListener("input", update);
  withLine.addEventListener("input", update);
  update();
}

function updateOutput(s, output, codeNode, withLine) {
  const code = format(s, withLine);

  output.innerHTML = code;
  codeNode.textContent = code;
}

const rootClass = "my-summary-list",
  suffix = `\n</div>`;

function formatPrefix(opts) {
  const bottomLine = opts?.withLine
    ? ".my-summary-list details{padding-bottom:1em;border-bottom:1px solid rgb(114,130,127)}"
    : "";
  return `
<div class="my-summary-list">
   <style type="text/css">
    .my-summary-list details{margin-bottom:1em;max-width:72ch}
    .my-summary-list p{margin-bottom:1em;margin-left:1em;}
    .my-summary-list p:last-child{margin-bottom:0;}
    .my-summary-list summary, .my-summary-list p{
      font-family:futura-lt-w01-light,futura-lt-w05-light,sans-serif;
      color:rgb(114,130,127);
    }
    ${bottomLine}
   </style>
`;
}

function isTitle(s) {
  return s[0] !== " " && s[0] !== "\t";
}

function format(s, withLine) {
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

  return formatPrefix({ withLine }) +
    groups.map((g) => formatEntry(g.title, g.items)).join("\n") +
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
