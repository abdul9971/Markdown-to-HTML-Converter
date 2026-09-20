# 🚀 Markdown to HTML Converter

A simple and interactive **Markdown to HTML Converter** built with **HTML, CSS, and JavaScript**.  
The application converts markdown syntax into HTML in real time, displays the generated HTML code, and renders a live preview so users can instantly see the final result.

---

## 📸 Preview

> Add a screenshot of the project here.

```text
Markdown Input  →  Raw HTML Output  →  Live HTML Preview
```

---

## ✨ Features

✅ Real-time Markdown to HTML conversion

✅ Displays generated HTML code separately

✅ Live HTML preview rendering

✅ Supports common Markdown elements

✅ Responsive three-column layout

✅ Built with vanilla JavaScript (no external libraries)

---

## 🛠️ Supported Markdown Syntax

| Markdown | HTML Output |
|-----------|------------|
| `# Heading 1` | `<h1>` |
| `## Heading 2` | `<h2>` |
| `### Heading 3` | `<h3>` |
| `**Bold**` | `<strong>` |
| `*Italic*` | `<em>` |
| `_Italic_` | `<em>` |
| `url` | `<img>` |
| `url` | `<a>` |
| `> Quote` | `<blockquote>` |

---

## 🧩 How It Works

The application contains three main sections:

### 📝 Markdown Input
Users can type markdown content inside a textarea.

### 💻 Raw HTML Output
The generated HTML code is displayed exactly as produced by the converter.

### 🌐 HTML Preview
The generated HTML is rendered directly in the browser, providing an instant visual preview.

---

## ⚙️ Project Structure

```text
Markdown-to-HTML-Converter/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## 🔍 Core Implementation

### HTML
- Creates the user interface.
- Contains the textarea, HTML output area, and preview container.

### CSS
- Provides responsive styling.
- Uses Flexbox for multi-column layout on larger screens.
- Optimizes the display for both desktop and mobile devices.

### JavaScript
- Detects user input using the `input` event.
- Converts markdown syntax into HTML using Regular Expressions.
- Updates the HTML output and preview dynamically.

---

## 📚 Concepts Practiced

- DOM Manipulation
- Event Handling
- Regular Expressions (Regex)
- String Processing
- Live Data Rendering
- Responsive Design
- HTML5
- CSS3
- JavaScript ES6

---

## 🎯 Learning Outcomes

This project helped me understand:

- How markdown syntax can be transformed into HTML.
- Practical usage of Regular Expressions.
- Real-time DOM updates.
- Event-driven programming.
- Building responsive web applications using plain JavaScript.

---

## 🚀 Future Improvements

- Support unordered and ordered lists
- Support inline code formatting
- Support code blocks
- Support tables
- Add dark mode
- Add syntax highlighting
- Add markdown export feature
- Improve markdown parsing logic

---

## 💡 Example

### Markdown Input

```markdown
# Welcome

## About

This is **bold** text.

This is *italic* text.

https://github.com

> Learning JavaScript is fun!
```

### Generated HTML

```html
<h1>Welcome</h1>

<h2>About</h2>

This is <strong>bold</strong> text.

This is <em>italic</em> text.

https://github.comVisit GitHub</a>

<blockquote>Learning JavaScript is fun!</blockquote>
```

---

## 👨‍💻 Author

Created as part of my JavaScript learning journey to practice:

**DOM Manipulation • Regex • Event Handling • Real-Time Rendering • Responsive Design**

---

⭐ Feel free to explore the project, suggest improvements, or use it as a reference while learning JavaScript.
