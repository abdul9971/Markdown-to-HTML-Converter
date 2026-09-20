const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview")

function convertMarkdown() {
  return markdownInput.value
    .replace(/^\s*### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^\s*## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^\s*# (.+)$/gm, "<h1>$1</h1>")
    .replace(/(\*{2}|_{2})(.+)\1/gm, "<strong>$2</strong>")
    .replace(/(\*|_)(.+)\1/gm, "<em>$2</em>")
    .replace(/!\[(.+)\]\((.+)\)/gm, '<img alt="$1" src="$2">')
    .replace(/\[(.+)\]\((.+)\)/gm, '<a href="$2">$1</a>')
    .replace(/^\>\s+(.+)/gm, "<blockquote>$1</blockquote>");
}

markdownInput.addEventListener("input", () => {
  const convertedHTML = convertMarkdown();
  htmlOutput.textContent = convertedHTML;
  preview.innerHTML = convertedHTML;
})

