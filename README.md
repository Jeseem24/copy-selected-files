# 📋 Copy Selected Files

[![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=jeseem.copy-selected-files)


🚀 **Copy multiple selected files into your clipboard as clean, structured Markdown — perfect for code reviews, documentation, bug reports, and AI prompts**.

---

## ✨ Features

- 📁 Select multiple files from VS Code Explorer
- 📋 Copy all file contents in **one action**
- 🧠 Handles **large selections** safely
- 🛑 Cancel anytime
- 🧱 Skips binary & large files
- 🧠 Markdown output with optional code fences

---

## 🚀 How to Use

1. Select multiple files (`Ctrl / Cmd + Click`)
2. Right-click → **Copy Selected Files Content**
3. Paste anywhere (ChatGPT, docs, editor)

Or use **Command Palette**:  
`Ctrl + Shift + P` → Copy Selected Files Content

---

## ⚙️ Configuration

You can configure the extension via:

- **Settings → Copy Selected Files**, or  
- Directly in your `settings.json`

| Setting | Description | Default |
|----------|-------------|----------|
| `copySelectedFiles.maxFileSizeKB` | Skip files larger than this size (KB) | `1024` |
| `copySelectedFiles.enableCodeFences` | Wrap content in Markdown code fences | `true` |
| `copySelectedFiles.includeLanguage` | Add language identifiers to code fences | `true` |

---

## 🐞 Report Issues & Request Features

**Found a bug?**  
👉 [Open an Issue](https://github.com/Jeseem24/copy-selected-files/issues/new)

---

**Made with ❤️**
